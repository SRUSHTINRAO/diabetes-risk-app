from flask import Flask, render_template, request, make_response
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

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# ── Valid ranges ─────────────────────────────────────────────
RANGES = {
    'pregnancies':   (0,   20,  "Pregnancies must be between 0 and 20"),
    'glucose':       (50, 300,  "Glucose must be between 50 and 300 mg/dL"),
    'bloodpressure': (30, 140,  "Blood Pressure must be between 30 and 140 mm Hg"),
    'skinthickness': (0,  100,  "Skin Thickness must be between 0 and 100 mm"),
    'insulin':       (0,  900,  "Insulin must be between 0 and 900 µU/mL"),
    'bmi':           (10,  70,  "BMI must be between 10 and 70"),
    'dpf':           (0.0, 2.5, "Diabetes Pedigree must be between 0.0 and 2.5"),
    'age':           (1,  120,  "Age must be between 1 and 120"),
}

def validate(form):
    errors = {}
    values = {}
    for field, (low, high, msg) in RANGES.items():
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


def get_interpretations(features, glucose_context):
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
        interps['insulin'] = ("red", "Elevated insulin (166+ uU/mL). May indicate insulin resistance - a key diabetes risk factor.")

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


def generate_pdf(prediction, probability, risk, color,
                 advice, features, interpretations,
                 glucose_context_label):
    """Generate a full PDF report and return as bytes."""

    buffer = io.BytesIO()

    doc = SimpleDocTemplate(
        buffer, pagesize=A4,
        leftMargin=18*mm, rightMargin=18*mm,
        topMargin=18*mm, bottomMargin=18*mm
    )

    # ── Colours ──────────────────────────────────────────────
    BLUE        = colors.HexColor("#2c7be5")
    DARK_BLUE   = colors.HexColor("#1a68d1")
    C_GREEN     = colors.HexColor("#28a745")
    C_ORANGE    = colors.HexColor("#e65100")
    C_RED       = colors.HexColor("#c62828")
    C_BLUE_LBL  = colors.HexColor("#1565c0")
    GREY_BG     = colors.HexColor("#f5f5f5")
    GREY_TEXT   = colors.HexColor("#555555")
    WHITE       = colors.white
    BLACK       = colors.HexColor("#1a1a1a")

    risk_color_map = {
        "green":  C_GREEN,
        "orange": C_ORANGE,
        "red":    C_RED,
        "blue":   C_BLUE_LBL,
    }
    risk_bg_map = {
        "green":  colors.HexColor("#e8f5e9"),
        "orange": colors.HexColor("#fff3e0"),
        "red":    colors.HexColor("#ffebee"),
        "blue":   colors.HexColor("#e3f2fd"),
    }
    main_color = risk_color_map.get(color, C_GREEN)

    # ── Styles ───────────────────────────────────────────────
    def style(name, **kw):
        return ParagraphStyle(name, **kw)

    W = A4[0] - 36*mm

    story = []

    # ── Header banner ────────────────────────────────────────
    header = Table([[
        Paragraph("Diabetes Risk Report",
                  style("T", fontSize=20, textColor=WHITE,
                        fontName="Helvetica-Bold", alignment=TA_CENTER))
    ]], colWidths=[W])
    header.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), BLUE),
        ("ROUNDEDCORNERS",[8]),
        ("TOPPADDING",    (0,0),(-1,-1), 14),
        ("BOTTOMPADDING", (0,0),(-1,-1), 14),
    ]))
    story.append(header)

    # Date
    date_str = datetime.now().strftime("%d %B %Y, %I:%M %p")
    date_row = Table([[
        Paragraph(f"Generated on: {date_str}",
                  style("D", fontSize=9,
                        textColor=colors.HexColor("#cce4ff"),
                        fontName="Helvetica", alignment=TA_CENTER))
    ]], colWidths=[W])
    date_row.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), DARK_BLUE),
        ("TOPPADDING",    (0,0),(-1,-1), 4),
        ("BOTTOMPADDING", (0,0),(-1,-1), 6),
    ]))
    story.append(date_row)
    story.append(Spacer(1, 5*mm))

    # ── Risk Result Box ──────────────────────────────────────
    result_data = [
        [Paragraph(f"Risk Level: {risk} — {prediction}",
                   style("R1", fontSize=16, textColor=WHITE,
                         fontName="Helvetica-Bold", alignment=TA_CENTER))],
        [Paragraph(f"Diabetes Probability: {probability}%",
                   style("R2", fontSize=12, textColor=WHITE,
                         fontName="Helvetica", alignment=TA_CENTER))],
        [Paragraph(advice,
                   style("R3", fontSize=9,
                         textColor=colors.HexColor("#f0f0f0"),
                         fontName="Helvetica-Oblique", alignment=TA_CENTER))],
    ]
    result_box = Table(result_data, colWidths=[W])
    result_box.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), main_color),
        ("ROUNDEDCORNERS",[8]),
        ("TOPPADDING",    (0,0),(-1,-1), 10),
        ("BOTTOMPADDING", (0,0),(-1,-1), 10),
        ("LEFTPADDING",   (0,0),(-1,-1), 14),
        ("RIGHTPADDING",  (0,0),(-1,-1), 14),
    ]))
    story.append(result_box)
    story.append(Spacer(1, 5*mm))

    # ── Section header helper ─────────────────────────────────
    def sec(text, bg):
        t = Table([[Paragraph(text,
                    style("SH", fontSize=11, textColor=WHITE,
                          fontName="Helvetica-Bold"))]], colWidths=[W])
        t.setStyle(TableStyle([
            ("BACKGROUND",    (0,0),(-1,-1), bg),
            ("ROUNDEDCORNERS",[5]),
            ("TOPPADDING",    (0,0),(-1,-1), 6),
            ("BOTTOMPADDING", (0,0),(-1,-1), 6),
            ("LEFTPADDING",   (0,0),(-1,-1), 10),
        ]))
        return t

    # ── Smart Interpretations ─────────────────────────────────
    story.append(sec("  Health Parameter Analysis", BLUE))
    story.append(Spacer(1, 2*mm))

    field_order = [
        ('glucose',       'Glucose',           f"{features[1]:.1f} mg/dL",
         f"Context: {glucose_context_label}"),
        ('bmi',           'BMI',               f"{features[5]:.1f}", ""),
        ('bloodpressure', 'Blood Pressure',    f"{features[2]:.1f} mm Hg", ""),
        ('insulin',       'Insulin',           f"{features[4]:.1f} uU/mL", ""),
        ('age',           'Age',               f"{int(features[7])} yrs", ""),
        ('skinthickness', 'Skin Thickness',    f"{features[3]:.1f} mm", ""),
        ('dpf',           'Diabetes Pedigree', f"{features[6]}", ""),
        ('pregnancies',   'Pregnancies',       f"{int(features[0])}", ""),
    ]

    for key, label, reading, extra in field_order:
        c, note = interpretations[key]
        bg   = risk_bg_map.get(c, GREY_BG)
        lcol = risk_color_map.get(c, BLACK)
        note_text = note
        if extra:
            note_text += f"<br/><font size='7' color='#888888'>{extra}</font>"

        row = Table([[
            Paragraph(label,
                      style(f"L{key}", fontSize=9, textColor=BLACK,
                            fontName="Helvetica-Bold")),
            Paragraph(note_text,
                      style(f"N{key}", fontSize=8, textColor=GREY_TEXT,
                            fontName="Helvetica", leading=12)),
            Paragraph(reading,
                      style(f"V{key}", fontSize=9, textColor=lcol,
                            fontName="Helvetica-Bold", alignment=TA_CENTER)),
        ]], colWidths=[32*mm, W-32*mm-28*mm, 28*mm])

        row.setStyle(TableStyle([
            ("BACKGROUND",    (0,0),(-1,-1), bg),
            ("VALIGN",        (0,0),(-1,-1), "MIDDLE"),
            ("TOPPADDING",    (0,0),(-1,-1), 6),
            ("BOTTOMPADDING", (0,0),(-1,-1), 6),
            ("LEFTPADDING",   (0,0),(-1,-1), 8),
            ("RIGHTPADDING",  (0,0),(-1,-1), 8),
            ("LINEBELOW",     (0,0),(-1,-1), 0.3,
             colors.HexColor("#dddddd")),
        ]))
        story.append(row)

    story.append(Spacer(1, 5*mm))

    # ── Health Tips Summary ───────────────────────────────────
    story.append(sec("  Health Tips Summary", C_GREEN))
    story.append(Spacer(1, 2*mm))

    tips_data = [
        ["Diet",      "Choose whole grains, pulses, vegetables. Avoid sugary drinks and fried foods."],
        ["Exercise",  "Walk 30 min daily. Yoga twice a week. Break sitting every hour."],
        ["Lifestyle", "Sleep 7-8 hrs. Manage stress. Check blood sugar annually."],
        ["Weight",    "Even 3-5 kg weight loss significantly reduces diabetes risk."],
    ]

    for i, (cat, tip) in enumerate(tips_data):
        bg = colors.HexColor("#e8f5e9") if i % 2 == 0 else WHITE
        row = Table([[
            Paragraph(cat, style(f"TC{i}", fontSize=9, textColor=C_GREEN,
                                 fontName="Helvetica-Bold")),
            Paragraph(tip, style(f"TT{i}", fontSize=8, textColor=GREY_TEXT,
                                 fontName="Helvetica", leading=12)),
        ]], colWidths=[22*mm, W-22*mm])
        row.setStyle(TableStyle([
            ("BACKGROUND",    (0,0),(-1,-1), bg),
            ("VALIGN",        (0,0),(-1,-1), "MIDDLE"),
            ("TOPPADDING",    (0,0),(-1,-1), 6),
            ("BOTTOMPADDING", (0,0),(-1,-1), 6),
            ("LEFTPADDING",   (0,0),(-1,-1), 8),
            ("RIGHTPADDING",  (0,0),(-1,-1), 8),
            ("LINEBELOW",     (0,0),(-1,-1), 0.3,
             colors.HexColor("#dddddd")),
        ]))
        story.append(row)

    story.append(Spacer(1, 5*mm))

    # ── Medical Disclaimer ────────────────────────────────────
    story.append(sec("  Medical Disclaimer", C_ORANGE))
    story.append(Spacer(1, 2*mm))

    disc_items = [
        "This report is generated by an ML model trained on the PIMA Indians Diabetes Dataset.",
        "It cannot replace a medical diagnosis.",
        "A proper diagnosis requires: HbA1c level, OGTT results, fasting glucose confirmation, and clinical evaluation.",
        "If you are concerned about your results, please consult a qualified doctor immediately.",
    ]
    for item in disc_items:
        story.append(Paragraph(
            f"• {item}",
            style(f"DI{item[:5]}", fontSize=8, textColor=GREY_TEXT,
                  fontName="Helvetica", leading=14,
                  leftIndent=8)
        ))

    story.append(Spacer(1, 5*mm))

    # ── Footer ────────────────────────────────────────────────
    footer = Table([[
        Paragraph(
            "diabetes-risk-app-32e5.onrender.com  |  For educational use only",
            style("F", fontSize=8,
                  textColor=colors.HexColor("#cce4ff"),
                  fontName="Helvetica-Oblique", alignment=TA_CENTER))
    ]], colWidths=[W])
    footer.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),(-1,-1), DARK_BLUE),
        ("ROUNDEDCORNERS",[5]),
        ("TOPPADDING",    (0,0),(-1,-1), 8),
        ("BOTTOMPADDING", (0,0),(-1,-1), 8),
    ]))
    story.append(footer)

    doc.build(story)
    buffer.seek(0)
    return buffer.getvalue()


@app.route('/')
def home():
    return render_template('index.html', errors={}, values={})


@app.route('/predict', methods=['POST'])
def predict():
    errors, values = validate(request.form)
    if errors:
        return render_template('index.html', errors=errors, values=values)

    features = [float(values[f]) for f in RANGES.keys()]
    glucose_context = request.form.get('glucose_context', 'random')

    prediction = model.predict([features])[0]
    probability = model.predict_proba([features])[0][1] * 100

    if probability < 30:
        risk, color = "Low", "green"
        advice = "Your indicators look healthy. Maintain a balanced diet and exercise regularly."
    elif probability < 60:
        risk, color = "Medium", "orange"
        advice = "Some indicators are elevated. Consider consulting a doctor and improving your diet."
    else:
        risk, color = "High", "red"
        advice = "Multiple indicators suggest high risk. Please consult a doctor as soon as possible."

    interpretations   = get_interpretations(features, glucose_context)
    context_labels    = {
        'fasting':    'Fasting (8+ hrs without food)',
        'after_meal': 'After a meal',
        'random':     'Random / Unknown'
    }
    glucose_context_label = context_labels.get(glucose_context, 'Random / Unknown')

    return render_template('result.html',
        prediction=("Diabetic" if prediction == 1 else "Not Diabetic"),
        probability=round(probability, 1),
        risk=risk, color=color, advice=advice,
        features=features,
        interpretations=interpretations,
        glucose_context=glucose_context,
        glucose_context_label=glucose_context_label
    )


@app.route('/download', methods=['POST'])
def download():
    """Generate and return PDF report."""
    features = [float(request.form.get(f, 0)) for f in [
        'pregnancies','glucose','bloodpressure','skinthickness',
        'insulin','bmi','dpf','age'
    ]]
    prediction          = request.form.get('prediction', '')
    probability         = float(request.form.get('probability', 0))
    risk                = request.form.get('risk', '')
    color               = request.form.get('color', 'green')
    advice              = request.form.get('advice', '')
    glucose_context     = request.form.get('glucose_context', 'random')
    glucose_context_label = request.form.get('glucose_context_label', 'Random / Unknown')

    interpretations = get_interpretations(features, glucose_context)

    pdf_bytes = generate_pdf(
        prediction, probability, risk, color,
        advice, features, interpretations,
        glucose_context_label
    )

    response = make_response(pdf_bytes)
    response.headers['Content-Type']        = 'application/pdf'
    response.headers['Content-Disposition'] = \
        f'attachment; filename=diabetes_risk_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.pdf'
    return response


@app.route('/tips')
def tips():
    return render_template('tips.html')


if __name__ == '__main__':
    app.run(debug=True)