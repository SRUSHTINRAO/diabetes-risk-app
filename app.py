from flask import Flask, render_template, request, make_response
from database import init_db, save_prediction, get_all_predictions, get_stats, clear_history
import pickle
import numpy as np
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from datetime import datetime
import io

app = Flask(__name__)

# ── Initialize database ──────────────────────────────────────
init_db()

# ── Load models ──────────────────────────────────────────────
with open('model.pkl', 'rb') as f:
    diabetes_model = pickle.load(f)

with open('heart_model.pkl', 'rb') as f:
    heart_model = pickle.load(f)

with open('heart_features.pkl', 'rb') as f:
    heart_features = pickle.load(f)

# ── Diabetes ranges ──────────────────────────────────────────
DIABETES_RANGES = {
    'pregnancies':   (0,   20,  "Pregnancies must be between 0 and 20"),
    'glucose':       (50, 300,  "Glucose must be between 50 and 300 mg/dL"),
    'bloodpressure': (30, 140,  "Blood Pressure must be between 30 and 140 mm Hg"),
    'skinthickness': (0,  100,  "Skin Thickness must be between 0 and 100 mm"),
    'insulin':       (0,  900,  "Insulin must be between 0 and 900 µU/mL"),
    'bmi':           (10,  70,  "BMI must be between 10 and 70"),
    'dpf':           (0.0, 2.5, "Diabetes Pedigree must be between 0.0 and 2.5"),
    'age':           (1,  120,  "Age must be between 1 and 120"),
}

# ── Heart ranges ─────────────────────────────────────────────
HEART_RANGES = {
    'age':      (1,   120, "Age must be between 1 and 120"),
    'sex':      (0,     1, "Please select a sex"),
    'cp':       (0,     3, "Please select a chest pain type"),
    'trestbps': (80,  200, "Resting BP must be between 80 and 200 mm Hg"),
    'chol':     (100, 600, "Cholesterol must be between 100 and 600 mg/dL"),
    'fbs':      (0,     1, "Please select yes or no"),
    'restecg':  (0,     2, "Please select an ECG result"),
    'thalach':  (60,  202, "Max heart rate must be between 60 and 202 bpm"),
    'exang':    (0,     1, "Please select yes or no"),
    'oldpeak':  (0,   6.2, "ST Depression must be between 0 and 6.2"),
    'slope':    (0,     2, "Please select a slope type"),
    'ca':       (0,     3, "Please select number of major vessels"),
    'thal':     (0,     3, "Please select a thalassemia type"),
}


# ════════════════════════════════════════════════════════════
# SHARED VALIDATION
# ════════════════════════════════════════════════════════════
def validate(form, ranges):
    errors = {}
    values = {}
    for field, (low, high, msg) in ranges.items():
        raw = form.get(field, '').strip()
        if not raw:
            errors[field] = "This field is required"
            values[field] = ''
            continue
        try:
            val = float(raw)
        except ValueError:
            errors[field] = "Please enter a valid number"
            values[field] = raw
            continue
        if not (low <= val <= high):
            errors[field] = msg
            values[field] = raw
        else:
            values[field] = raw
    return errors, values


# ════════════════════════════════════════════════════════════
# DIABETES INTERPRETATIONS
# ════════════════════════════════════════════════════════════
def get_diabetes_interpretations(features, glucose_context):
    pregnancies, glucose, bp, skin, insulin, bmi, dpf, age = features
    interps = {}

    # Glucose
    if glucose_context == "fasting":
        if glucose < 100:
            interps['glucose'] = ("green", "Normal fasting glucose (below 100 mg/dL).")
        elif glucose < 126:
            interps['glucose'] = ("orange", "Prediabetes range for fasting glucose (100-125 mg/dL). Consider lifestyle changes.")
        else:
            interps['glucose'] = ("red", "High fasting glucose (126+ mg/dL) meets one criterion for diabetes diagnosis. Consult a doctor.")
    elif glucose_context == "after_meal":
        if glucose < 140:
            interps['glucose'] = ("green", "Normal post-meal glucose (below 140 mg/dL).")
        elif glucose < 200:
            interps['glucose'] = ("orange", "Elevated post-meal glucose (140-199 mg/dL). May indicate impaired glucose tolerance.")
        else:
            interps['glucose'] = ("red", "High post-meal glucose (200+ mg/dL) may indicate diabetes. Consult a doctor.")
    else:
        if glucose < 100:
            interps['glucose'] = ("green", "Glucose looks normal. Specify fasting vs post-meal for a more precise interpretation.")
        elif glucose < 126:
            interps['glucose'] = ("orange", "Glucose could be concerning if fasting. Specify measurement context for better insight.")
        else:
            interps['glucose'] = ("red", "Glucose 126+ mg/dL is concerning regardless of timing. HbA1c and OGTT needed for diagnosis.")

    # BMI
    if bmi < 18.5:
        interps['bmi'] = ("blue", "Underweight. Low BMI is not a diabetes risk but may indicate other health concerns.")
    elif bmi < 23:
        interps['bmi'] = ("green", "Normal BMI (Asian guidelines: 18.5-22.9). Healthy range.")
    elif bmi < 27.5:
        interps['bmi'] = ("orange", "Overweight (Asian guidelines: 23-27.4). Moderate diabetes risk. Even 3-5 kg loss helps.")
    else:
        interps['bmi'] = ("red", "Obese (Asian guidelines: 27.5+). Significant diabetes risk. Lifestyle changes strongly recommended.")

    # Blood Pressure
    if bp < 60:
        interps['bloodpressure'] = ("blue", "Low blood pressure. May need medical evaluation.")
    elif bp <= 80:
        interps['bloodpressure'] = ("green", "Normal diastolic blood pressure (60-80 mm Hg).")
    elif bp <= 90:
        interps['bloodpressure'] = ("orange", "Mildly elevated blood pressure (80-90 mm Hg). Monitor regularly.")
    else:
        interps['bloodpressure'] = ("red", "High blood pressure (90+ mm Hg). Often co-occurs with diabetes. Consult a doctor.")

    # Insulin
    if insulin == 0:
        interps['insulin'] = ("orange", "Insulin value is 0 - likely not measured. This limits prediction accuracy.")
    elif insulin < 16:
        interps['insulin'] = ("orange", "Below normal insulin (16-166 uU/mL). May indicate low insulin production.")
    elif insulin <= 166:
        interps['insulin'] = ("green", "Insulin level within normal range (16-166 uU/mL).")
    else:
        interps['insulin'] = ("red", "Elevated insulin (166+ uU/mL). May indicate insulin resistance.")

    # Age
    if age < 30:
        interps['age'] = ("green", "Young age group. Diabetes risk is generally lower but not zero.")
    elif age < 45:
        interps['age'] = ("orange", "Middle age group. Diabetes risk increases - annual screening recommended.")
    else:
        interps['age'] = ("red", "Older age group. Diabetes risk is significantly higher. Regular screening is essential.")

    # Skin Thickness
    if skin < 10:
        interps['skinthickness'] = ("blue", "Below typical range. May not have been measured accurately.")
    elif skin <= 40:
        interps['skinthickness'] = ("green", "Skin thickness within normal range (10-40 mm).")
    else:
        interps['skinthickness'] = ("orange", "Above normal skin thickness. Can indicate higher body fat percentage.")

    # DPF
    if dpf < 0.3:
        interps['dpf'] = ("green", "Low genetic risk score. Family history is not a strong risk factor here.")
    elif dpf < 0.6:
        interps['dpf'] = ("orange", "Moderate genetic risk. Some family history of diabetes present.")
    else:
        interps['dpf'] = ("red", "High genetic risk score. Strong family history of diabetes - lifestyle prevention is crucial.")

    # Pregnancies
    if pregnancies == 0:
        interps['pregnancies'] = ("green", "No pregnancies recorded.")
    elif pregnancies <= 3:
        interps['pregnancies'] = ("green", "Low number of pregnancies. Minimal gestational diabetes history risk.")
    elif pregnancies <= 6:
        interps['pregnancies'] = ("orange", "Moderate pregnancies. Slightly increased gestational diabetes history risk.")
    else:
        interps['pregnancies'] = ("red", "High number of pregnancies. Previous gestational diabetes increases Type 2 risk significantly.")

    return interps


# ════════════════════════════════════════════════════════════
# HEART INTERPRETATIONS
# ════════════════════════════════════════════════════════════
def get_heart_interpretations(features):
    age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal = features
    interps = {}

    # Age
    if age < 40:
        interps['age'] = ("green", "Younger age. Heart disease risk is lower but not zero.")
    elif age < 55:
        interps['age'] = ("orange", "Middle age. Heart disease risk increases significantly after 45.")
    else:
        interps['age'] = ("red", "Older age. Heart disease risk is significantly higher. Regular cardiac screening essential.")

    # Sex
    if sex == 1:
        interps['sex'] = ("orange", "Male. Men have a higher risk of heart disease, especially before age 65.")
    else:
        interps['sex'] = ("green", "Female. Women generally have lower heart disease risk before menopause.")

    # Chest Pain Type
    cp_msgs = {
        0: ("red",    "Typical Angina — classic chest pain from reduced blood flow to heart. High concern."),
        1: ("orange", "Atypical Angina — chest pain with unusual characteristics. Moderate concern."),
        2: ("orange", "Non-Anginal Pain — chest pain unlikely from heart. Still worth evaluating."),
        3: ("green",  "Asymptomatic — no chest pain. Note: heart disease can be silent."),
    }
    interps['cp'] = cp_msgs.get(int(cp), ("blue", "Unknown chest pain type."))

    # Resting BP
    if trestbps < 120:
        interps['trestbps'] = ("green", "Normal resting blood pressure (below 120 mm Hg).")
    elif trestbps < 140:
        interps['trestbps'] = ("orange", "Elevated blood pressure (120-139 mm Hg). A major heart disease risk factor.")
    else:
        interps['trestbps'] = ("red", "High blood pressure (140+ mm Hg). Significantly increases heart disease risk.")

    # Cholesterol
    if chol < 200:
        interps['chol'] = ("green", "Desirable cholesterol level (below 200 mg/dL).")
    elif chol < 240:
        interps['chol'] = ("orange", "Borderline high cholesterol (200-239 mg/dL). Lifestyle changes recommended.")
    else:
        interps['chol'] = ("red", "High cholesterol (240+ mg/dL). Major risk factor for coronary artery disease.")

    # Fasting Blood Sugar
    if fbs == 1:
        interps['fbs'] = ("red", "Fasting blood sugar above 120 mg/dL. Elevated blood sugar increases heart disease risk.")
    else:
        interps['fbs'] = ("green", "Fasting blood sugar within normal range (below 120 mg/dL).")

    # Max Heart Rate
    max_expected = 220 - age
    if thalach >= max_expected * 0.85:
        interps['thalach'] = ("green", f"Good max heart rate. Reaching 85%+ of maximum ({int(max_expected)} bpm for your age) indicates healthy cardiac response.")
    elif thalach >= max_expected * 0.7:
        interps['thalach'] = ("orange", f"Moderate max heart rate. Below ideal 85% of maximum ({int(max_expected)} bpm for your age).")
    else:
        interps['thalach'] = ("red", f"Low max heart rate relative to age. May indicate poor cardiac fitness or disease.")

    # Exercise Angina
    if exang == 1:
        interps['exang'] = ("red", "Exercise-induced chest pain present. Strong indicator of coronary artery disease.")
    else:
        interps['exang'] = ("green", "No exercise-induced chest pain. Positive sign.")

    # ST Depression
    if oldpeak <= 0.5:
        interps['oldpeak'] = ("green", "Normal ST depression (0-0.5). No significant ischemia indicated.")
    elif oldpeak <= 2.0:
        interps['oldpeak'] = ("orange", "Mild ST depression (0.5-2.0). May indicate mild ischemia.")
    else:
        interps['oldpeak'] = ("red", "Significant ST depression (2.0+). Strong indicator of myocardial ischemia.")

    # Major Vessels
    ca_msgs = {
        0: ("green",  "No major vessels blocked. Best case scenario."),
        1: ("orange", "1 major vessel blocked. Moderate coronary artery disease present."),
        2: ("red",    "2 major vessels blocked. Significant coronary artery disease."),
        3: ("red",    "3 major vessels blocked. Severe coronary artery disease. Urgent evaluation needed."),
    }
    interps['ca'] = ca_msgs.get(int(ca), ("blue", "Unknown vessel count."))

    # Thal
    thal_msgs = {
        0: ("green",  "Normal thalassemia. No blood disorder affecting heart."),
        1: ("orange", "Fixed defect. Permanent area of reduced blood flow in heart."),
        2: ("red",    "Reversible defect. Area of reduced blood flow during stress — high risk indicator."),
        3: ("blue",   "Unknown thalassemia type."),
    }
    interps['thal'] = thal_msgs.get(int(thal), ("blue", "Unknown thalassemia type."))

    return interps


# ════════════════════════════════════════════════════════════
# PDF GENERATION (diabetes)
# ════════════════════════════════════════════════════════════
def generate_pdf(prediction, probability, risk, color,
                 advice, features, interpretations,
                 glucose_context_label):
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4,
        leftMargin=18*mm, rightMargin=18*mm,
        topMargin=18*mm, bottomMargin=18*mm)

    BLUE       = colors.HexColor("#2c7be5")
    DARK_BLUE  = colors.HexColor("#1a68d1")
    C_GREEN    = colors.HexColor("#28a745")
    C_ORANGE   = colors.HexColor("#e65100")
    C_RED      = colors.HexColor("#c62828")
    C_BLUE_LBL = colors.HexColor("#1565c0")
    GREY_BG    = colors.HexColor("#f5f5f5")
    GREY_TEXT  = colors.HexColor("#555555")
    WHITE      = colors.white
    BLACK      = colors.HexColor("#1a1a1a")

    risk_color_map = {"green": C_GREEN, "orange": C_ORANGE,
                      "red": C_RED, "blue": C_BLUE_LBL}
    risk_bg_map    = {"green":  colors.HexColor("#e8f5e9"),
                      "orange": colors.HexColor("#fff3e0"),
                      "red":    colors.HexColor("#ffebee"),
                      "blue":   colors.HexColor("#e3f2fd")}
    main_color = risk_color_map.get(color, C_GREEN)

    def s(name, **kw): return ParagraphStyle(name, **kw)
    W = A4[0] - 36*mm
    story = []

    # Header
    story.append(Table([[Paragraph("Diabetes Risk Report",
        s("T", fontSize=20, textColor=WHITE, fontName="Helvetica-Bold",
          alignment=TA_CENTER))]], colWidths=[W]))
    story[-1].setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),BLUE),("ROUNDEDCORNERS",[8]),
        ("TOPPADDING",(0,0),(-1,-1),14),("BOTTOMPADDING",(0,0),(-1,-1),14),
    ]))

    date_str = datetime.now().strftime("%d %B %Y, %I:%M %p")
    story.append(Table([[Paragraph(f"Generated on: {date_str}",
        s("D", fontSize=9, textColor=colors.HexColor("#cce4ff"),
          fontName="Helvetica", alignment=TA_CENTER))]], colWidths=[W]))
    story[-1].setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),DARK_BLUE),
        ("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),6),
    ]))
    story.append(Spacer(1, 5*mm))

    # Result box
    story.append(Table([
        [Paragraph(f"Risk Level: {risk} — {prediction}",
            s("R1", fontSize=16, textColor=WHITE, fontName="Helvetica-Bold",
              alignment=TA_CENTER))],
        [Paragraph(f"Diabetes Probability: {probability}%",
            s("R2", fontSize=12, textColor=WHITE, fontName="Helvetica",
              alignment=TA_CENTER))],
        [Paragraph(advice,
            s("R3", fontSize=9, textColor=colors.HexColor("#f0f0f0"),
              fontName="Helvetica-Oblique", alignment=TA_CENTER))],
    ], colWidths=[W]))
    story[-1].setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),main_color),("ROUNDEDCORNERS",[8]),
        ("TOPPADDING",(0,0),(-1,-1),10),("BOTTOMPADDING",(0,0),(-1,-1),10),
        ("LEFTPADDING",(0,0),(-1,-1),14),("RIGHTPADDING",(0,0),(-1,-1),14),
    ]))
    story.append(Spacer(1, 5*mm))

    def sec(text, bg):
        t = Table([[Paragraph(text, s("SH", fontSize=11, textColor=WHITE,
                                      fontName="Helvetica-Bold"))]], colWidths=[W])
        t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),bg),
            ("ROUNDEDCORNERS",[5]),("TOPPADDING",(0,0),(-1,-1),6),
            ("BOTTOMPADDING",(0,0),(-1,-1),6),("LEFTPADDING",(0,0),(-1,-1),10)]))
        return t

    # Interpretations
    story.append(sec("  Health Parameter Analysis", BLUE))
    story.append(Spacer(1, 2*mm))

    field_order = [
        ('glucose','Glucose',f"{features[1]:.1f} mg/dL",
         f"Context: {glucose_context_label}"),
        ('bmi','BMI',f"{features[5]:.1f}",""),
        ('bloodpressure','Blood Pressure',f"{features[2]:.1f} mm Hg",""),
        ('insulin','Insulin',f"{features[4]:.1f} uU/mL",""),
        ('age','Age',f"{int(features[7])} yrs",""),
        ('skinthickness','Skin Thickness',f"{features[3]:.1f} mm",""),
        ('dpf','Diabetes Pedigree',f"{features[6]}",""),
        ('pregnancies','Pregnancies',f"{int(features[0])}",""),
    ]

    for key, label, reading, extra in field_order:
        c, note = interpretations[key]
        bg   = risk_bg_map.get(c, GREY_BG)
        lcol = risk_color_map.get(c, BLACK)
        note_text = note
        if extra:
            note_text += f"<br/><font size='7' color='#888888'>{extra}</font>"
        row_t = Table([[
            Paragraph(label, s(f"L{key}", fontSize=9, textColor=BLACK,
                               fontName="Helvetica-Bold")),
            Paragraph(note_text, s(f"N{key}", fontSize=8, textColor=GREY_TEXT,
                                   fontName="Helvetica", leading=12)),
            Paragraph(reading, s(f"V{key}", fontSize=9, textColor=lcol,
                                 fontName="Helvetica-Bold", alignment=TA_CENTER)),
        ]], colWidths=[32*mm, W-32*mm-28*mm, 28*mm])
        row_t.setStyle(TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),bg),("VALIGN",(0,0),(-1,-1),"MIDDLE"),
            ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
            ("LEFTPADDING",(0,0),(-1,-1),8),("RIGHTPADDING",(0,0),(-1,-1),8),
            ("LINEBELOW",(0,0),(-1,-1),0.3,colors.HexColor("#dddddd")),
        ]))
        story.append(row_t)

    story.append(Spacer(1, 5*mm))

    # Tips
    story.append(sec("  Health Tips Summary", C_GREEN))
    story.append(Spacer(1, 2*mm))
    for i, (cat, tip) in enumerate([
        ("Diet",     "Choose whole grains, pulses, vegetables. Avoid sugary drinks and fried foods."),
        ("Exercise", "Walk 30 min daily. Yoga twice a week. Break sitting every hour."),
        ("Lifestyle","Sleep 7-8 hrs. Manage stress. Check blood sugar annually."),
        ("Weight",   "Even 3-5 kg weight loss significantly reduces diabetes risk."),
    ]):
        bg = colors.HexColor("#e8f5e9") if i % 2 == 0 else WHITE
        row_t = Table([[
            Paragraph(cat, s(f"TC{i}", fontSize=9, textColor=C_GREEN,
                             fontName="Helvetica-Bold")),
            Paragraph(tip, s(f"TT{i}", fontSize=8, textColor=GREY_TEXT,
                             fontName="Helvetica", leading=12)),
        ]], colWidths=[22*mm, W-22*mm])
        row_t.setStyle(TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),bg),("VALIGN",(0,0),(-1,-1),"MIDDLE"),
            ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
            ("LEFTPADDING",(0,0),(-1,-1),8),("RIGHTPADDING",(0,0),(-1,-1),8),
            ("LINEBELOW",(0,0),(-1,-1),0.3,colors.HexColor("#dddddd")),
        ]))
        story.append(row_t)

    story.append(Spacer(1, 5*mm))

    # Disclaimer
    story.append(sec("  Medical Disclaimer", C_ORANGE))
    story.append(Spacer(1, 2*mm))
    for item in [
        "This report is generated by an ML model trained on the PIMA Indians Diabetes Dataset.",
        "It cannot replace a medical diagnosis.",
        "A proper diagnosis requires: HbA1c level, OGTT results, fasting glucose confirmation, and clinical evaluation.",
        "If you are concerned about your results, please consult a qualified doctor immediately.",
    ]:
        story.append(Paragraph(f"• {item}",
            s(f"DI{item[:5]}", fontSize=8, textColor=GREY_TEXT,
              fontName="Helvetica", leading=14, leftIndent=8)))

    story.append(Spacer(1, 5*mm))

    # Footer
    story.append(Table([[Paragraph(
        "diabetes-risk-app-32e5.onrender.com  |  For educational use only",
        s("F", fontSize=8, textColor=colors.HexColor("#cce4ff"),
          fontName="Helvetica-Oblique", alignment=TA_CENTER))]], colWidths=[W]))
    story[-1].setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),DARK_BLUE),("ROUNDEDCORNERS",[5]),
        ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8),
    ]))

    doc.build(story)
    buffer.seek(0)
    return buffer.getvalue()


# ════════════════════════════════════════════════════════════
# DIABETES ROUTES
# ════════════════════════════════════════════════════════════
@app.route('/')
def home():
    return render_template('index.html', errors={}, values={})


@app.route('/predict', methods=['POST'])
def predict():
    errors, values = validate(request.form, DIABETES_RANGES)
    if errors:
        return render_template('index.html', errors=errors, values=values)

    features = [float(values[f]) for f in DIABETES_RANGES.keys()]
    glucose_context = request.form.get('glucose_context', 'random')
    gender = request.form.get('gender', 'female')

    prediction = diabetes_model.predict([features])[0]
    probability = diabetes_model.predict_proba([features])[0][1] * 100

    if probability < 30:
        risk, color = "Low", "green"
        advice = "Your indicators look healthy. Maintain a balanced diet and exercise regularly."
    elif probability < 60:
        risk, color = "Medium", "orange"
        advice = "Some indicators are elevated. Consider consulting a doctor and improving your diet."
    else:
        risk, color = "High", "red"
        advice = "Multiple indicators suggest high risk. Please consult a doctor as soon as possible."

    interpretations = get_diabetes_interpretations(features, glucose_context)
    context_labels  = {
        'fasting':    'Fasting (8+ hrs without food)',
        'after_meal': 'After a meal',
        'random':     'Random / Unknown'
    }
    glucose_context_label = context_labels.get(glucose_context, 'Random / Unknown')

    pred_label = "Diabetic" if prediction == 1 else "Not Diabetic"

    # Save to database
    save_prediction(
        pred_type  = "Diabetes",
        risk       = risk,
        probability= round(probability, 1),
        prediction = pred_label,
        color      = color
    )

    return render_template('result.html',
        prediction=pred_label,
        probability=round(probability, 1),
        risk=risk, color=color, advice=advice,
        features=features,
        interpretations=interpretations,
        glucose_context=glucose_context,
        glucose_context_label=glucose_context_label,
        gender=gender
    )


@app.route('/download', methods=['POST'])
def download():
    features = [float(request.form.get(f, 0)) for f in [
        'pregnancies','glucose','bloodpressure','skinthickness',
        'insulin','bmi','dpf','age'
    ]]
    prediction            = request.form.get('prediction', '')
    probability           = float(request.form.get('probability', 0))
    risk                  = request.form.get('risk', '')
    color                 = request.form.get('color', 'green')
    advice                = request.form.get('advice', '')
    glucose_context       = request.form.get('glucose_context', 'random')
    glucose_context_label = request.form.get('glucose_context_label', 'Random / Unknown')

    interpretations = get_diabetes_interpretations(features, glucose_context)
    pdf_bytes = generate_pdf(prediction, probability, risk, color,
                             advice, features, interpretations,
                             glucose_context_label)

    response = make_response(pdf_bytes)
    response.headers['Content-Type']        = 'application/pdf'
    response.headers['Content-Disposition'] = \
        f'attachment; filename=diabetes_risk_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.pdf'
    return response


# ════════════════════════════════════════════════════════════
# HEART DISEASE ROUTES
# ════════════════════════════════════════════════════════════
@app.route('/heart')
def heart():
    return render_template('heart.html', errors={}, values={})


@app.route('/heart-predict', methods=['POST'])
def heart_predict():
    errors, values = validate(request.form, HEART_RANGES)
    if errors:
        return render_template('heart.html', errors=errors, values=values)

    # Build features in correct order
    features = [float(values[f]) for f in HEART_RANGES.keys()]

    prediction  = heart_model.predict([features])[0]
    probability = heart_model.predict_proba([features])[0][1] * 100

    if probability < 30:
        risk, color = "Low", "green"
        advice = "Your cardiac indicators look relatively healthy. Maintain a heart-friendly lifestyle."
    elif probability < 60:
        risk, color = "Medium", "orange"
        advice = "Some cardiac indicators are concerning. Consult a cardiologist for a full evaluation."
    else:
        risk, color = "High", "red"
        advice = "Multiple cardiac indicators suggest high risk. Please consult a cardiologist as soon as possible."

    interpretations = get_heart_interpretations(features)

    pred_label = "Heart Disease" if prediction == 1 else "No Heart Disease"

    # Save to database
    save_prediction(
        pred_type  = "Heart",
        risk       = risk,
        probability= round(probability, 1),
        prediction = pred_label,
        color      = color
    )

    return render_template('heart_result.html',
        prediction=pred_label,
        probability=round(probability, 1),
        risk=risk, color=color, advice=advice,
        features=features,
        interpretations=interpretations
    )


@app.route('/tips')
def tips():
    return render_template('tips.html')


@app.route('/history')
def history():
    predictions = get_all_predictions()
    stats       = get_stats()
    return render_template('history.html',
        predictions=predictions,
        stats=stats
    )


@app.route('/clear-history', methods=['POST'])
def clear_history_route():
    clear_history()
    return render_template('history.html',
        predictions=[],
        stats=get_stats()
    )


if __name__ == '__main__':
    app.run(debug=True)