# 🏥 Diabetes Risk Predictor

A machine learning web application that predicts diabetes risk based on health parameters.
Built as a healthcare-focused CS project with real-world impact.

🔗 **Live Demo:** https://diabetes-risk-app-32e5.onrender.com

---

## 📌 Problem Statement

India faces a severe diabetes epidemic with an estimated 101 million adults
living with diabetes and another 136 million with pre-diabetes. Over 90% of
cases are Type 2, driven by rapid urbanization, sedentary lifestyles, and
genetic predispositions. Alarmingly, over 50% of patients remain undiagnosed.

This tool helps individuals assess their risk early using simple health
parameters, encouraging timely medical consultation before complications arise.

---

## 🛠️ Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Language     | Python 3.13             |
| ML Model     | Random Forest Classifier|
| Data         | pandas, scikit-learn    |
| Web App      | Flask                   |
| Frontend     | HTML, Bootstrap 5       |
| Deployment   | Render                  |
| Version Control | Git + GitHub         |

---

## 📊 Dataset

- **Source:** PIMA Indians Diabetes Database (Kaggle / UCI ML Repository)
- **Size:** 768 patient records, 8 features
- **Target:** Binary classification (Diabetic / Not Diabetic)

**Features used:**
- Pregnancies, Glucose, Blood Pressure, Skin Thickness
- Insulin, BMI, Diabetes Pedigree Function, Age

---

## 🤖 Model Performance

| Metric    | Score  |
|-----------|--------|
| Accuracy  | ~78%   |
| Algorithm | Random Forest (100 estimators) |
| Train/Test Split | 80% / 20% |

**Key finding:** Glucose level and BMI are the strongest predictors of diabetes risk.

---

## ✨ Features

- **Risk Prediction** — Low / Medium / High risk with probability score
- **Input Validation** — Medical range checks with friendly error messages
- **Health Tips Page** — Diet, exercise and lifestyle advice (India-specific)
- **Responsive UI** — Works on desktop and mobile browsers

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SRUSHTINRAO/diabetes-risk-app.git
cd diabetes-risk-app

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

Visit `http://127.0.0.1:5000` in your browser.

---

## 📁 Project Structure
diabetes-risk-app/
├── app.py                  # Flask backend + routes
├── model.pkl               # Trained Random Forest model
├── requirements.txt        # Python dependencies
├── templates/
│   ├── index.html          # Input form page
│   ├── result.html         # Prediction result page
│   └── tips.html           # Health tips page
└── README.md
---

## 🔮 Future Improvements

- [ ] Add heart disease predictor (second model)
- [ ] Prediction history with SQLite database
- [ ] Kannada/Hindi language support
- [ ] Mobile-optimised UI
- [ ] Email PDF report of results

---

## ⚠️ Disclaimer

This tool is for **educational purposes only**. It is not a substitute for
professional medical advice. Always consult a qualified doctor.

---

## 👨‍💻 Author

**Srushti N Rao**
CS Undergraduate | Healthcare AI Enthusiast
[GitHub](https://github.com/SRUSHTINRAO)
