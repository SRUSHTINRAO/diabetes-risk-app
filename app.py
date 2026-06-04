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
        # Check if empty
        if not raw:
            errors[field] = "This field is required"
            values[field] = ''
            continue
        # Check if numeric
        try:
            val = float(raw)
        except ValueError:
            errors[field] = "Please enter a valid number"
            values[field] = raw
            continue
        # Check range
        if not (low <= val <= high):
            errors[field] = msg
            values[field] = raw
        else:
            values[field] = raw
    return errors, values

@app.route('/')
def home():
    return render_template('index.html', errors={}, values={})

@app.route('/predict', methods=['POST'])
def predict():
    errors, values = validate(request.form)

    # If any errors → send back to form with error messages
    if errors:
        return render_template('index.html', errors=errors, values=values)

    # All good → run prediction
    features = [float(values[f]) for f in RANGES.keys()]
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

    return render_template('result.html',
        prediction="Diabetic" if prediction == 1 else "Not Diabetic",
        probability=round(probability, 1),
        risk=risk, color=color, advice=advice,
        features=features
    )

@app.route('/tips')
def tips():
    return render_template('tips.html')

if __name__ == '__main__':
    app.run(debug=True)