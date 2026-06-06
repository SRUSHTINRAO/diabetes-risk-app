from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# ── Valid ranges for each field ──────────────────────────────
RANGES = {
    'pregnancies':    (0,   20,  "Pregnancies must be between 0 and 20"),
    'glucose':        (50, 300,  "Glucose must be between 50 and 300 mg/dL"),
    'bloodpressure':  (30, 140,  "Blood Pressure must be between 30 and 140 mm Hg"),
    'skinthickness':  (0,  100,  "Skin Thickness must be between 0 and 100 mm"),
    'insulin':        (0,  900,  "Insulin must be between 0 and 900 µU/mL"),
    'bmi':            (10,  70,  "BMI must be between 10 and 70"),
    'dpf':            (0.0, 2.5, "Diabetes Pedigree must be between 0.0 and 2.5"),
    'age':            (1,  120,  "Age must be between 1 and 120"),
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
    """
    Generate per-field smart interpretations.
    features = [pregnancies, glucose, bp, skin, insulin, bmi, dpf, age]
    """
    pregnancies, glucose, bp, skin, insulin, bmi, dpf, age = features
    interps = {}

    # ── Glucose ──────────────────────────────────────────────
    if glucose_context == "fasting":
        if glucose < 100:
            interps['glucose'] = ("green", "✅ Normal fasting glucose (below 100 mg/dL).")
        elif glucose < 126:
            interps['glucose'] = ("orange", "⚠️ Prediabetes range for fasting glucose (100–125 mg/dL). Consider lifestyle changes.")
        else:
            interps['glucose'] = ("red", "🔴 High fasting glucose (≥126 mg/dL) meets one criterion for diabetes diagnosis. Consult a doctor.")
    elif glucose_context == "after_meal":
        if glucose < 140:
            interps['glucose'] = ("green", "✅ Normal post-meal glucose (below 140 mg/dL).")
        elif glucose < 200:
            interps['glucose'] = ("orange", "⚠️ Elevated post-meal glucose (140–199 mg/dL). May indicate impaired glucose tolerance.")
        else:
            interps['glucose'] = ("red", "🔴 High post-meal glucose (≥200 mg/dL) may indicate diabetes. Consult a doctor.")
    else:  # random / unknown
        if glucose < 100:
            interps['glucose'] = ("green", "✅ Glucose looks normal. Context (fasting vs post-meal) would give a more precise interpretation.")
        elif glucose < 126:
            interps['glucose'] = ("orange", "⚠️ Glucose is in a range that could be concerning if fasting. Specify measurement context for better insight.")
        else:
            interps['glucose'] = ("red", "🔴 Glucose ≥126 mg/dL is concerning regardless of timing. Consult a doctor. Note: HbA1c and OGTT are needed for diagnosis.")

    # ── BMI ──────────────────────────────────────────────────
    if bmi < 18.5:
        interps['bmi'] = ("blue", "🔵 Underweight. Low BMI is not a diabetes risk but may indicate other health concerns.")
    elif bmi < 23:
        interps['bmi'] = ("green", "✅ Normal BMI (Asian guidelines: 18.5–22.9). Healthy range.")
    elif bmi < 27.5:
        interps['bmi'] = ("orange", "⚠️ Overweight range (Asian guidelines: 23–27.4). Moderate diabetes risk. Weight loss of even 3–5 kg helps.")
    else:
        interps['bmi'] = ("red", "🔴 Obese range (Asian guidelines: ≥27.5). Significant diabetes risk factor. Lifestyle changes strongly recommended.")

    # ── Blood Pressure ────────────────────────────────────────
    if bp < 60:
        interps['bloodpressure'] = ("blue", "🔵 Low blood pressure. May need medical evaluation.")
    elif bp <= 80:
        interps['bloodpressure'] = ("green", "✅ Normal diastolic blood pressure (60–80 mm Hg).")
    elif bp <= 90:
        interps['bloodpressure'] = ("orange", "⚠️ Mildly elevated blood pressure (80–90 mm Hg). Monitor regularly.")
    else:
        interps['bloodpressure'] = ("red", "🔴 High blood pressure (>90 mm Hg). Often co-occurs with diabetes. Consult a doctor.")

    # ── Insulin ───────────────────────────────────────────────
    if insulin == 0:
        interps['insulin'] = ("orange", "⚠️ Insulin value is 0 — likely not measured. This limits prediction accuracy.")
    elif insulin < 16:
        interps['insulin'] = ("orange", "⚠️ Below normal insulin (16–166 µU/mL). May indicate low insulin production.")
    elif insulin <= 166:
        interps['insulin'] = ("green", "✅ Insulin level within normal range (16–166 µU/mL).")
    else:
        interps['insulin'] = ("red", "🔴 Elevated insulin (>166 µU/mL). May indicate insulin resistance — a key diabetes risk factor.")

    # ── Age ───────────────────────────────────────────────────
    if age < 30:
        interps['age'] = ("green", "✅ Young age group. Diabetes risk is generally lower but not zero.")
    elif age < 45:
        interps['age'] = ("orange", "⚠️ Middle age group. Diabetes risk increases — annual screening recommended.")
    else:
        interps['age'] = ("red", "🔴 Older age group. Diabetes risk is significantly higher. Regular screening is essential.")

    # ── Skin Thickness ────────────────────────────────────────
    if skin < 10:
        interps['skinthickness'] = ("blue", "🔵 Below typical range. May not have been measured accurately.")
    elif skin <= 40:
        interps['skinthickness'] = ("green", "✅ Skin thickness within normal range (10–40 mm).")
    else:
        interps['skinthickness'] = ("orange", "⚠️ Above normal skin thickness. Can indicate higher body fat percentage.")

    # ── Diabetes Pedigree Function ────────────────────────────
    if dpf < 0.3:
        interps['dpf'] = ("green", "✅ Low genetic risk score. Family history is not a strong risk factor here.")
    elif dpf < 0.6:
        interps['dpf'] = ("orange", "⚠️ Moderate genetic risk. Some family history of diabetes present.")
    else:
        interps['dpf'] = ("red", "🔴 High genetic risk score. Strong family history of diabetes — lifestyle prevention is crucial.")

    # ── Pregnancies ───────────────────────────────────────────
    if pregnancies == 0:
        interps['pregnancies'] = ("green", "✅ No pregnancies recorded.")
    elif pregnancies <= 3:
        interps['pregnancies'] = ("green", "✅ Low number of pregnancies. Minimal gestational diabetes history risk.")
    elif pregnancies <= 6:
        interps['pregnancies'] = ("orange", "⚠️ Moderate number of pregnancies. Slightly increased gestational diabetes history risk.")
    else:
        interps['pregnancies'] = ("red", "🔴 High number of pregnancies. Previous gestational diabetes increases Type 2 risk significantly.")

    return interps


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

    interpretations = get_interpretations(features, glucose_context)

    # Map glucose context to readable label
    context_labels = {
        'fasting':    'Fasting (8+ hrs without food)',
        'after_meal': 'After a meal',
        'random':     'Random / Unknown'
    }
    glucose_context_label = context_labels.get(glucose_context, 'Random / Unknown')

    return render_template('result.html',
        prediction="Diabetic" if prediction == 1 else "Not Diabetic",
        probability=round(probability, 1),
        risk=risk, color=color, advice=advice,
        features=features,
        interpretations=interpretations,
        glucose_context_label=glucose_context_label
    )


@app.route('/tips')
def tips():
    return render_template('tips.html')


if __name__ == '__main__':
    app.run(debug=True)