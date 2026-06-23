const translations = {
    en: {
        // ── App titles ──────────────────────────────────────
        app_title:          "Diabetes Risk Predictor",
        app_subtitle:       "Enter your health parameters below",
        heart_title:        "Heart Disease Risk Predictor",
        heart_subtitle:     "Enter your cardiac health parameters below",
        history_title:      "Prediction History",
        history_subtitle:   "Track your health risk over time",
        tips_title:         "Diabetes Prevention Guide",
        tips_subtitle:      "Simple, science-backed tips to lower your risk",

        // ── Navigation ───────────────────────────────────────
        nav_tips:           "Health Tips",
        nav_heart:          "Heart Disease",
        nav_diabetes:       "Diabetes Predictor",
        nav_history:        "History",
        nav_guide:          "Metrics Guide",

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "Pregnancies",
        label_glucose:      "Glucose Level",
        label_bp:           "Blood Pressure",
        label_skin:         "Skin Thickness",
        label_insulin:      "Insulin Level",
        label_bmi:          "BMI",
        label_dpf:          "Diabetes Pedigree Function",
        label_age:          "Age",
        label_gender:       "Gender",
        label_female:       "Female",
        label_male:         "Male",
        comparison_title:   "Your Values vs Population Average",

        // ── Placeholders ─────────────────────────────────────
        placeholder_pregnancies: "e.g. 2",
        placeholder_glucose:     "e.g. 120",
        placeholder_bp:          "e.g. 72",
        placeholder_skin:        "e.g. 25",
        placeholder_insulin:     "e.g. 80",
        placeholder_bmi:         "e.g. 28.5",
        placeholder_dpf:         "e.g. 0.350",
        placeholder_age:         "e.g. 35",
        placeholder_height:      "e.g. 165",
        placeholder_weight:      "e.g. 70.5",

        // ── Field hints ──────────────────────────────────────
        hint_glucose:       "Normal: 70–99 mg/dL",
        hint_bp:            "Normal: 60–80 mm Hg",
        hint_skin:          "Normal: 10–40 mm",
        hint_insulin:       "Normal: 16–166 µU/mL",
        hint_bmi:           "Normal: 18.5–24.9",
        hint_dpf:           "Genetic risk score (0.0–2.5)",
        hint_gender:        "Used to compare your values to population averages",

        // ── Misc ─────────────────────────────────────────────
        error_alert:        "Please fix the highlighted fields before continuing.",
        bmi_autofilled:     "(auto-filled below)",
        bmi_underweight:    "Underweight",
        bmi_normal:         "Normal weight",
        bmi_overweight:     "Overweight",
        bmi_obese:          "Obese",

        // ── Heart form labels ─────────────────────────────────
        label_heart_age:    "Age",
        label_sex:          "Sex",
        label_cp:           "Chest Pain Type",
        label_trestbps:     "Resting Blood Pressure",
        label_chol:         "Cholesterol",
        label_fbs:          "Fasting Blood Sugar > 120 mg/dL?",
        label_restecg:      "Resting ECG Results",
        label_thalach:      "Max Heart Rate Achieved",
        label_exang:        "Exercise Induced Angina?",
        label_oldpeak:      "ST Depression (Oldpeak)",
        label_slope:        "Slope of Peak Exercise ST",
        label_ca:           "Number of Major Vessels (0–3)",
        label_thal:         "Thalassemia Type",

        // ── Heart placeholders ───────────────────────────────
        placeholder_heart_age: "e.g. 55",
        placeholder_trestbps:  "e.g. 120",
        placeholder_chol:      "e.g. 200",
        placeholder_thalach:   "e.g. 150",
        placeholder_oldpeak:   "e.g. 1.0",

        // ── Heart hints ──────────────────────────────────────
        hint_trestbps:      "Normal: below 120 mm Hg",
        hint_chol:          "Normal: below 200 mg/dL",
        hint_thalach:       "Typical range: 60–202 bpm",
        hint_oldpeak:       "ST depression induced by exercise. Normal: 0–0.5",
        hint_cp:            "Typical Angina = chest pain from heart. Asymptomatic = no chest pain (can still have disease)",
        hint_exang:         "Chest pain that occurs during exercise or physical activity",
        hint_ca:            "Number of major vessels colored by fluoroscopy (0 = best)",
        hint_thal:          "Blood disorder affecting hemoglobin. Reversible defect = highest risk",

        // ── Select option ────────────────────────────────────
        select_option:      "Select...",

        // ── Yes/No ───────────────────────────────────────────
        option_yes:         "Yes",
        option_no:          "No",

        // ── Chest pain options ───────────────────────────────
        cp_0:               "0 — Typical Angina",
        cp_1:               "1 — Atypical Angina",
        cp_2:               "2 — Non-Anginal Pain",
        cp_3:               "3 — Asymptomatic",

        // ── Resting ECG options ──────────────────────────────
        restecg_0:          "0 — Normal",
        restecg_1:          "1 — ST-T Wave Abnormality",
        restecg_2:          "2 — Left Ventricular Hypertrophy",

        // ── Slope options ────────────────────────────────────
        slope_0:            "0 — Upsloping",
        slope_1:            "1 — Flat",
        slope_2:            "2 — Downsloping",

        // ── Thal options ─────────────────────────────────────
        thal_0:             "0 — Normal",
        thal_1:             "1 — Fixed Defect",
        thal_2:             "2 — Reversible Defect",
        thal_3:             "3 — Unknown",


        // ── BMI Calculator ───────────────────────────────────
        bmi_title:          "BMI Calculator — auto-fills the BMI field below",
        bmi_height:         "Height (cm)",
        bmi_weight:         "Weight (kg)",
        bmi_clear:          "Clear",

        // ── Glucose context ──────────────────────────────────
        glucose_when:       "When was this measured?",
        glucose_fasting:    "Fasting (8+ hours without food)",
        glucose_after_meal: "After a meal",
        glucose_random:     "Random / I don't know",

        // ── Buttons ──────────────────────────────────────────
        btn_predict:        "Predict My Risk",
        btn_heart_predict:  "Predict Heart Disease Risk",
        btn_check_again:    "Check Again",
        btn_health_tips:    "View Health Tips",
        btn_download:       "Download Report",
        btn_view_history:   "View History",
        btn_check_diabetes: "Check Diabetes",
        btn_check_heart:    "Check Heart",
        btn_clear_history:  "Clear History",

        // ── Result page ──────────────────────────────────────
        result_title:       "Your Risk Assessment",
        result_heart_title: "Heart Disease Risk Assessment",
        result_based_on:    "Based on your 8 health indicators",
        result_heart_based: "Based on your 13 cardiac indicators",
        result_what_means:  "What this means:",
        result_your_inputs: "Your Inputs — with medical context",
        result_measured:    "Measured:",

        // ── Medical note ─────────────────────────────────────
        medical_note:       "Important Medical Note",
        medical_desc:       "This prediction is based on statistical patterns and cannot replace a medical diagnosis. A proper diagnosis requires:",
        medical_item1:      "HbA1c level (3-month average blood sugar)",
        medical_item2:      "Oral Glucose Tolerance Test (OGTT) results",
        medical_item3:      "Clinical evaluation by a qualified healthcare professional",
        medical_footer:     "If you are concerned about your results, please consult a doctor — early detection saves lives.",
        educational_note:   "For educational use only. Please consult a qualified doctor for medical advice.",

        // ── History page ─────────────────────────────────────
        total_checks:       "Total Checks",
        diabetes_checks:    "Diabetes Checks",
        heart_checks:       "Heart Checks",
        avg_probability:    "Avg Probability",
        risk_trend:         "Risk Trend Over Time",
        all_predictions:    "All Predictions",
        no_predictions:     "No predictions yet",
        no_pred_desc:       "Make your first prediction to start tracking your health risk over time.",
        col_date:           "Date",
        col_time:           "Time",
        col_type:           "Type",
        col_prediction:     "Prediction",
        col_risk:           "Risk",
        col_probability:    "Probability",

        // ── Tips page ────────────────────────────────────────
        tips_diet_eat:      "Diet — What to Eat",
        tips_diet_avoid:    "Diet — What to Limit",
        tips_exercise:      "Exercise — Move More",
        tips_lifestyle:     "Lifestyle Habits",
        tips_numbers:       "Know Your Numbers",
        tips_check_risk:    "Check Your Risk Now",
    },

    kn: {
        // ── App titles ──────────────────────────────────────
        app_title:          "ಮಧುಮೇಹ ಅಪಾಯ ಮುನ್ಸೂಚಕ",
        app_subtitle:       "ಕೆಳಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಮಾಹಿತಿ ನಮೂದಿಸಿ",
        heart_title:        "ಹೃದಯ ರೋಗ ಅಪಾಯ ಮುನ್ಸೂಚಕ",
        heart_subtitle:     "ನಿಮ್ಮ ಹೃದಯ ಆರೋಗ್ಯ ಮಾಹಿತಿ ನಮೂದಿಸಿ",
        history_title:      "ಮುನ್ಸೂಚನೆ ಇತಿಹಾಸ",
        history_subtitle:   "ಕಾಲಾನಂತರ ನಿಮ್ಮ ಆರೋಗ್ಯ ಅಪಾಯ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        tips_title:         "ಮಧುಮೇಹ ತಡೆಗಟ್ಟುವ ಮಾರ್ಗದರ್ಶಿ",
        tips_subtitle:      "ಅಪಾಯ ಕಡಿಮೆ ಮಾಡಲು ವೈಜ್ಞಾನಿಕ ಸಲಹೆಗಳು",

        // ── Navigation ───────────────────────────────────────
        nav_tips:           "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
        nav_heart:          "ಹೃದಯ ರೋಗ",
        nav_diabetes:       "ಮಧುಮೇಹ ಮುನ್ಸೂಚಕ",
        nav_history:        "ಇತಿಹಾಸ",
        nav_guide:          "ಮೆಟ್ರಿಕ್ಸ್ ಮಾರ್ಗದರ್ಶಿ",

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "ಗರ್ಭಧಾರಣೆಗಳು",
        label_glucose:      "ಗ್ಲೂಕೋಸ್ ಮಟ್ಟ",
        label_bp:           "ರಕ್ತದೊತ್ತಡ",
        label_skin:         "ಚರ್ಮದ ದಪ್ಪ",
        label_insulin:      "ಇನ್ಸುಲಿನ್ ಮಟ್ಟ",
        label_bmi:          "ಬಿಎಂಐ",
        label_dpf:          "ಮಧುಮೇಹ ವಂಶಾವಳಿ ಕಾರ್ಯ",
        label_age:          "ವಯಸ್ಸು",
        label_gender:       "ಲಿಂಗ",
        label_female:       "ಮಹಿಳೆ",
        label_male:         "ಪುರುಷ",
        comparison_title:   "ನಿಮ್ಮ ಮೌಲ್ಯಗಳು vs ಜನಸಂಖ್ಯೆ ಸರಾಸರಿ",

        // ── Placeholders ─────────────────────────────────────
        placeholder_pregnancies: "ಉದಾ. 2",
        placeholder_glucose:     "ಉದಾ. 120",
        placeholder_bp:          "ಉದಾ. 72",
        placeholder_skin:        "ಉದಾ. 25",
        placeholder_insulin:     "ಉದಾ. 80",
        placeholder_bmi:         "ಉದಾ. 28.5",
        placeholder_dpf:         "ಉದಾ. 0.350",
        placeholder_age:         "ಉದಾ. 35",
        placeholder_height:      "ಉದಾ. 165",
        placeholder_weight:      "ಉದಾ. 70.5",

        // ── Field hints ──────────────────────────────────────
        hint_glucose:       "ಸಾಮಾನ್ಯ: 70–99 mg/dL",
        hint_bp:            "ಸಾಮಾನ್ಯ: 60–80 mm Hg",
        hint_skin:          "ಸಾಮಾನ್ಯ: 10–40 mm",
        hint_insulin:       "ಸಾಮಾನ್ಯ: 16–166 µU/mL",
        hint_bmi:           "ಸಾಮಾನ್ಯ: 18.5–24.9",
        hint_dpf:           "ಜೆನೆಟಿಕ್ ಅಪಾಯ ಸ್ಕೋರ್ (0.0–2.5)",
        hint_gender:        "ಜನಸಂಖ್ಯೆ ಸರಾಸರಿಗೆ ಹೋಲಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ",

        // ── Misc ─────────────────────────────────────────────
        error_alert:        "ಮುಂದುವರಿಸುವ ಮೊದಲು ಹೈಲೈಟ್ ಮಾಡಿದ ಕ್ಷೇತ್ರಗಳನ್ನು ಸರಿಪಡಿಸಿ.",
        bmi_autofilled:     "(ಕೆಳಗೆ ಸ್ವಯಂ ತುಂಬಿಸಲಾಗಿದೆ)",
        bmi_underweight:    "ಕಡಿಮೆ ತೂಕ",
        bmi_normal:         "ಸಾಮಾನ್ಯ ತೂಕ",
        bmi_overweight:     "ಅಧಿಕ ತೂಕ",
        bmi_obese:          "ಬೊಜ್ಜು",

        // ── Heart form labels ─────────────────────────────────
        label_heart_age:    "ವಯಸ್ಸು",
        label_sex:          "ಲಿಂಗ",
        label_cp:           "ಎದೆ ನೋವಿನ ಪ್ರಕಾರ",
        label_trestbps:     "ವಿಶ್ರಾಂತಿ ರಕ್ತದೊತ್ತಡ",
        label_chol:         "ಕೊಲೆಸ್ಟ್ರಾಲ್",
        label_fbs:          "ಉಪವಾಸ ರಕ್ತದ ಸಕ್ಕರೆ > 120 mg/dL?",
        label_restecg:      "ವಿಶ್ರಾಂತಿ ECG ಫಲಿತಾಂಶಗಳು",
        label_thalach:      "ಗರಿಷ್ಠ ಹೃದಯ ಬಡಿತ",
        label_exang:        "ವ್ಯಾಯಾಮದಿಂದ ಎದೆ ನೋವು?",
        label_oldpeak:      "ST ಖಿನ್ನತೆ (Oldpeak)",
        label_slope:        "ಗರಿಷ್ಠ ವ್ಯಾಯಾಮ ST ಯ ಇಳಿಜಾರು",
        label_ca:           "ಮುಖ್ಯ ರಕ್ತನಾಳಗಳ ಸಂಖ್ಯೆ (0–3)",
        label_thal:         "ಥಲಸ್ಸೆಮಿಯಾ ಪ್ರಕಾರ",

        // ── Heart placeholders ───────────────────────────────
        placeholder_heart_age: "ಉದಾ. 55",
        placeholder_trestbps:  "ಉದಾ. 120",
        placeholder_chol:      "ಉದಾ. 200",
        placeholder_thalach:   "ಉದಾ. 150",
        placeholder_oldpeak:   "ಉದಾ. 1.0",

        // ── Heart hints ──────────────────────────────────────
        hint_trestbps:      "ಸಾಮಾನ್ಯ: 120 mm Hg ಗಿಂತ ಕಡಿಮೆ",
        hint_chol:          "ಸಾಮಾನ್ಯ: 200 mg/dL ಗಿಂತ ಕಡಿಮೆ",
        hint_thalach:       "ಸಾಮಾನ್ಯ ವ್ಯಾಪ್ತಿ: 60–202 bpm",
        hint_oldpeak:       "ವ್ಯಾಯಾಮದಿಂದ ST ಖಿನ್ನತೆ. ಸಾಮಾನ್ಯ: 0–0.5",
        hint_cp:            "ಟಿಪಿಕಲ್ ಆಂಜಿನಾ = ಹೃದಯದಿಂದ ಎದೆ ನೋವು. ಅಸಿಂಪ್ಟೊಮ್ಯಾಟಿಕ್ = ಎದೆ ನೋವು ಇಲ್ಲ (ಆದರೂ ರೋಗ ಇರಬಹುದು)",
        hint_exang:         "ವ್ಯಾಯಾಮ ಅಥವಾ ದೈಹಿಕ ಚಟುವಟಿಕೆಯ ಸಮಯದಲ್ಲಿ ಎದೆ ನೋವು",
        hint_ca:            "ಫ್ಲೋರೋಸ್ಕೋಪಿಯಿಂದ ಬಣ್ಣ ಬಂದ ಮುಖ್ಯ ರಕ್ತನಾಳಗಳ ಸಂಖ್ಯೆ (0 = ಉತ್ತಮ)",
        hint_thal:          "ಹಿಮೋಗ್ಲೋಬಿನ್ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ರಕ್ತ ಅಸ್ವಸ್ಥತೆ. ರಿವರ್ಸಿಬಲ್ ಡಿಫೆಕ್ಟ್ = ಅತಿ ಹೆಚ್ಚು ಅಪಾಯ",

        // ── Select option ────────────────────────────────────
        select_option:      "ಆಯ್ಕೆಮಾಡಿ...",

        // ── Yes/No ───────────────────────────────────────────
        option_yes:         "ಹೌದು",
        option_no:          "ಇಲ್ಲ",

        // ── Chest pain options ───────────────────────────────
        cp_0:               "0 — ಟಿಪಿಕಲ್ ಆಂಜಿನಾ",
        cp_1:               "1 — ಅಟಿಪಿಕಲ್ ಆಂಜಿನಾ",
        cp_2:               "2 — ನಾನ್-ಆಂಜಿನಲ್ ನೋವು",
        cp_3:               "3 — ಅಸಿಂಪ್ಟೊಮ್ಯಾಟಿಕ್",

        // ── Resting ECG options ──────────────────────────────
        restecg_0:          "0 — ಸಾಮಾನ್ಯ",
        restecg_1:          "1 — ST-T ತರಂಗ ಅಸಾಮಾನ್ಯತೆ",
        restecg_2:          "2 — ಎಡ ವೆಂಟ್ರಿಕ್ಯುಲರ್ ಹೈಪರ್ಟ್ರೋಫಿ",

        // ── Slope options ────────────────────────────────────
        slope_0:            "0 — ಮೇಲ್ಮುಖ ಇಳಿಜಾರು",
        slope_1:            "1 — ಸಮತಟ್ಟು",
        slope_2:            "2 — ಕೆಳಮುಖ ಇಳಿಜಾರು",

        // ── Thal options ─────────────────────────────────────
        thal_0:             "0 — ಸಾಮಾನ್ಯ",
        thal_1:             "1 — ಸ್ಥಿರ ಡಿಫೆಕ್ಟ್",
        thal_2:             "2 — ರಿವರ್ಸಿಬಲ್ ಡಿಫೆಕ್ಟ್",
        thal_3:             "3 — ಅಜ್ಞಾತ",


        // ── BMI Calculator ───────────────────────────────────
        bmi_title:          "ಬಿಎಂಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್ — ಕೆಳಗಿನ ಬಿಎಂಐ ಕ್ಷೇತ್ರ ತುಂಬಿಸುತ್ತದೆ",
        bmi_height:         "ಎತ್ತರ (ಸೆಂ.ಮೀ)",
        bmi_weight:         "ತೂಕ (ಕೆಜಿ)",
        bmi_clear:          "ತೆರವುಗೊಳಿಸಿ",

        // ── Glucose context ──────────────────────────────────
        glucose_when:       "ಇದನ್ನು ಯಾವಾಗ ಅಳೆಯಲಾಯಿತು?",
        glucose_fasting:    "ಉಪವಾಸ (8+ ಗಂಟೆ ಆಹಾರವಿಲ್ಲದೆ)",
        glucose_after_meal: "ಊಟದ ನಂತರ",
        glucose_random:     "ಯಾದೃಚ್ಛಿಕ / ತಿಳಿದಿಲ್ಲ",

        // ── Buttons ──────────────────────────────────────────
        btn_predict:        "ನನ್ನ ಅಪಾಯ ಊಹಿಸಿ",
        btn_heart_predict:  "ಹೃದಯ ರೋಗ ಅಪಾಯ ಊಹಿಸಿ",
        btn_check_again:    "ಮತ್ತೆ ಪರೀಕ್ಷಿಸಿ",
        btn_health_tips:    "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
        btn_download:       "ವರದಿ ಡೌನ್‌ಲೋಡ್",
        btn_view_history:   "ಇತಿಹಾಸ ನೋಡಿ",
        btn_check_diabetes: "ಮಧುಮೇಹ ಪರೀಕ್ಷಿಸಿ",
        btn_check_heart:    "ಹೃದಯ ಪರೀಕ್ಷಿಸಿ",
        btn_clear_history:  "ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ",

        // ── Result page ──────────────────────────────────────
        result_title:       "ನಿಮ್ಮ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ",
        result_heart_title: "ಹೃದಯ ರೋಗ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ",
        result_based_on:    "ನಿಮ್ಮ 8 ಆರೋಗ್ಯ ಸೂಚಕಗಳ ಆಧಾರದ ಮೇಲೆ",
        result_heart_based: "ನಿಮ್ಮ 13 ಹೃದಯ ಸೂಚಕಗಳ ಆಧಾರದ ಮೇಲೆ",
        result_what_means:  "ಇದರ ಅರ್ಥ:",
        result_your_inputs: "ನಿಮ್ಮ ಒಳಹರಿವು — ವೈದ್ಯಕೀಯ ಸಂದರ್ಭದೊಂದಿಗೆ",
        result_measured:    "ಅಳೆದ ಸಮಯ:",

        // ── Medical note ─────────────────────────────────────
        medical_note:       "ಮಹತ್ವದ ವೈದ್ಯಕೀಯ ಟಿಪ್ಪಣಿ",
        medical_desc:       "ಈ ಮುನ್ಸೂಚನೆ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಮಾದರಿಗಳನ್ನು ಆಧರಿಸಿದೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವನ್ನು ಬದಲಿಸಲಾಗುವುದಿಲ್ಲ.",
        medical_item1:      "HbA1c ಮಟ್ಟ (3 ತಿಂಗಳ ಸರಾಸರಿ ರಕ್ತ ಸಕ್ಕರೆ)",
        medical_item2:      "ಮೌಖಿಕ ಗ್ಲೂಕೋಸ್ ಸಹನಾ ಪರೀಕ್ಷೆ (OGTT)",
        medical_item3:      "ಅರ್ಹ ವೈದ್ಯರಿಂದ ಕ್ಲಿನಿಕಲ್ ಮೌಲ್ಯಮಾಪನ",
        medical_footer:     "ನಿಮ್ಮ ಫಲಿತಾಂಶದ ಬಗ್ಗೆ ಕಾಳಜಿ ಇದ್ದಲ್ಲಿ ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        educational_note:   "ಶಿಕ್ಷಣ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ದಯವಿಟ್ಟು ಅರ್ಹ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

        // ── History page ─────────────────────────────────────
        total_checks:       "ಒಟ್ಟು ಪರೀಕ್ಷೆಗಳು",
        diabetes_checks:    "ಮಧುಮೇಹ ಪರೀಕ್ಷೆಗಳು",
        heart_checks:       "ಹೃದಯ ಪರೀಕ್ಷೆಗಳು",
        avg_probability:    "ಸರಾಸರಿ ಸಂಭಾವ್ಯತೆ",
        risk_trend:         "ಕಾಲಾನಂತರ ಅಪಾಯ ಪ್ರವೃತ್ತಿ",
        all_predictions:    "ಎಲ್ಲಾ ಮುನ್ಸೂಚನೆಗಳು",
        no_predictions:     "ಇನ್ನೂ ಮುನ್ಸೂಚನೆಗಳಿಲ್ಲ",
        no_pred_desc:       "ಕಾಲಾನಂತರ ನಿಮ್ಮ ಆರೋಗ್ಯ ಅಪಾಯ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮೊದಲ ಮುನ್ಸೂಚನೆ ಮಾಡಿ.",
        col_date:           "ದಿನಾಂಕ",
        col_time:           "ಸಮಯ",
        col_type:           "ವಿಧ",
        col_prediction:     "ಮುನ್ಸೂಚನೆ",
        col_risk:           "ಅಪಾಯ",
        col_probability:    "ಸಂಭಾವ್ಯತೆ",

        // ── Tips page ────────────────────────────────────────
        tips_diet_eat:      "ಆಹಾರ — ತಿನ್ನಬೇಕಾದದ್ದು",
        tips_diet_avoid:    "ಆಹಾರ — ಮಿತಿಗೊಳಿಸಬೇಕಾದದ್ದು",
        tips_exercise:      "ವ್ಯಾಯಾಮ — ಹೆಚ್ಚು ಚಲಿಸಿ",
        tips_lifestyle:     "ಜೀವನಶೈಲಿ ಅಭ್ಯಾಸಗಳು",
        tips_numbers:       "ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳನ್ನು ತಿಳಿಯಿರಿ",
        tips_check_risk:    "ಈಗ ನಿಮ್ಮ ಅಪಾಯ ಪರೀಕ್ಷಿಸಿ",
    },

    hi: {
        // ── App titles ──────────────────────────────────────
        app_title:          "मधुमेह जोखिम भविष्यवक्ता",
        app_subtitle:       "नीचे अपने स्वास्थ्य मानक दर्ज करें",
        heart_title:        "हृदय रोग जोखिम भविष्यवक्ता",
        heart_subtitle:     "अपने हृदय स्वास्थ्य मानक दर्ज करें",
        history_title:      "भविष्यवाणी इतिहास",
        history_subtitle:   "समय के साथ अपने स्वास्थ्य जोखिम को ट्रैक करें",
        tips_title:         "मधुमेह रोकथाम मार्गदर्शिका",
        tips_subtitle:      "जोखिम कम करने के वैज्ञानिक सुझाव",

        // ── Navigation ───────────────────────────────────────
        nav_tips:           "स्वास्थ्य सुझाव",
        nav_heart:          "हृदय रोग",
        nav_diabetes:       "मधुमेह भविष्यवक्ता",
        nav_history:        "इतिहास",
        nav_guide:          "मेट्रिक्स गाइड",

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "गर्भधारण",
        label_glucose:      "ग्लूकोज स्तर",
        label_bp:           "रक्तचाप",
        label_skin:         "त्वचा की मोटाई",
        label_insulin:      "इंसुलिन स्तर",
        label_bmi:          "बीएमआई",
        label_dpf:          "मधुमेह वंशावली कार्य",
        label_age:          "आयु",
        label_gender:       "लिंग",
        label_female:       "महिला",
        label_male:         "पुरुष",
        comparison_title:   "आपके मूल्य बनाम जनसंख्या औसत",

        // ── Placeholders ─────────────────────────────────────
        placeholder_pregnancies: "उदा. 2",
        placeholder_glucose:     "उदा. 120",
        placeholder_bp:          "उदा. 72",
        placeholder_skin:        "उदा. 25",
        placeholder_insulin:     "उदा. 80",
        placeholder_bmi:         "उदा. 28.5",
        placeholder_dpf:         "उदा. 0.350",
        placeholder_age:         "उदा. 35",
        placeholder_height:      "उदा. 165",
        placeholder_weight:      "उदा. 70.5",

        // ── Field hints ──────────────────────────────────────
        hint_glucose:       "सामान्य: 70–99 mg/dL",
        hint_bp:            "सामान्य: 60–80 mm Hg",
        hint_skin:          "सामान्य: 10–40 mm",
        hint_insulin:       "सामान्य: 16–166 µU/mL",
        hint_bmi:           "सामान्य: 18.5–24.9",
        hint_dpf:           "आनुवंशिक जोखिम स्कोर (0.0–2.5)",
        hint_gender:        "जनसंख्या औसत से तुलना के लिए उपयोग किया जाता है",

        // ── Misc ─────────────────────────────────────────────
        error_alert:        "जारी रखने से पहले हाइलाइट किए गए फ़ील्ड ठीक करें।",
        bmi_autofilled:     "(नीचे स्वतः भरा गया)",
        bmi_underweight:    "कम वजन",
        bmi_normal:         "सामान्य वजन",
        bmi_overweight:     "अधिक वजन",
        bmi_obese:          "मोटापा",

        // ── Heart form labels ─────────────────────────────────
        label_heart_age:    "आयु",
        label_sex:          "लिंग",
        label_cp:           "सीने में दर्द का प्रकार",
        label_trestbps:     "विश्राम रक्तचाप",
        label_chol:         "कोलेस्ट्रॉल",
        label_fbs:          "उपवास रक्त शर्करा > 120 mg/dL?",
        label_restecg:      "विश्राम ECG परिणाम",
        label_thalach:      "अधिकतम हृदय गति",
        label_exang:        "व्यायाम से सीने में दर्द?",
        label_oldpeak:      "ST अवसाद (Oldpeak)",
        label_slope:        "पीक एक्सरसाइज ST का ढलान",
        label_ca:           "मुख्य वाहिकाओं की संख्या (0–3)",
        label_thal:         "थैलेसीमिया प्रकार",

        // ── Heart placeholders ───────────────────────────────
        placeholder_heart_age: "उदा. 55",
        placeholder_trestbps:  "उदा. 120",
        placeholder_chol:      "उदा. 200",
        placeholder_thalach:   "उदा. 150",
        placeholder_oldpeak:   "उदा. 1.0",

        // ── Heart hints ──────────────────────────────────────
        hint_trestbps:      "सामान्य: 120 mm Hg से कम",
        hint_chol:          "सामान्य: 200 mg/dL से कम",
        hint_thalach:       "सामान्य सीमा: 60–202 bpm",
        hint_oldpeak:       "व्यायाम से प्रेरित ST अवसाद। सामान्य: 0–0.5",
        hint_cp:            "टिपिकल एनजाइना = हृदय से सीने में दर्द। एसिम्प्टोमैटिक = सीने में दर्द नहीं (फिर भी रोग हो सकता है)",
        hint_exang:         "व्यायाम या शारीरिक गतिविधि के दौरान होने वाला सीने का दर्द",
        hint_ca:            "फ्लोरोस्कोपी द्वारा रंगीन मुख्य वाहिकाओं की संख्या (0 = सर्वोत्तम)",
        hint_thal:          "हीमोग्लोबिन को प्रभावित करने वाला रक्त विकार। रिवर्सिबल डिफेक्ट = सर्वाधिक जोखिम",

        // ── Select option ────────────────────────────────────
        select_option:      "चुनें...",

        // ── Yes/No ───────────────────────────────────────────
        option_yes:         "हां",
        option_no:          "नहीं",

        // ── Chest pain options ───────────────────────────────
        cp_0:               "0 — टिपिकल एनजाइना",
        cp_1:               "1 — एटिपिकल एनजाइना",
        cp_2:               "2 — नॉन-एनजाइनल दर्द",
        cp_3:               "3 — एसिम्प्टोमैटिक",

        // ── Resting ECG options ──────────────────────────────
        restecg_0:          "0 — सामान्य",
        restecg_1:          "1 — ST-T वेव असामान्यता",
        restecg_2:          "2 — लेफ्ट वेंट्रिकुलर हाइपरट्रॉफी",

        // ── Slope options ────────────────────────────────────
        slope_0:            "0 — ऊर्ध्व ढलान",
        slope_1:            "1 — समतल",
        slope_2:            "2 — अधोमुख ढलान",

        // ── Thal options ─────────────────────────────────────
        thal_0:             "0 — सामान्य",
        thal_1:             "1 — स्थिर डिफेक्ट",
        thal_2:             "2 — रिवर्सिबल डिफेक्ट",
        thal_3:             "3 — अज्ञात",

        // ── BMI Calculator ───────────────────────────────────
        bmi_title:          "बीएमआई कैलकुलेटर — नीचे बीएमआई फ़ील्ड भरता है",
        bmi_height:         "ऊंचाई (सेमी)",
        bmi_weight:         "वजन (किग्रा)",
        bmi_clear:          "साफ करें",

        // ── Glucose context ──────────────────────────────────
        glucose_when:       "यह कब मापा गया?",
        glucose_fasting:    "उपवास (8+ घंटे बिना खाए)",
        glucose_after_meal: "खाने के बाद",
        glucose_random:     "यादृच्छिक / पता नहीं",

        // ── Buttons ──────────────────────────────────────────
        btn_predict:        "मेरा जोखिम भविष्यवाणी करें",
        btn_heart_predict:  "हृदय रोग जोखिम भविष्यवाणी करें",
        btn_check_again:    "फिर जांचें",
        btn_health_tips:    "स्वास्थ्य सुझाव देखें",
        btn_download:       "रिपोर्ट डाउनलोड करें",
        btn_view_history:   "इतिहास देखें",
        btn_check_diabetes: "मधुमेह जांचें",
        btn_check_heart:    "हृदय जांचें",
        btn_clear_history:  "इतिहास साफ करें",

        // ── Result page ──────────────────────────────────────
        result_title:       "आपका जोखिम मूल्यांकन",
        result_heart_title: "हृदय रोग जोखिम मूल्यांकन",
        result_based_on:    "आपके 8 स्वास्थ्य संकेतकों के आधार पर",
        result_heart_based: "आपके 13 हृदय संकेतकों के आधार पर",
        result_what_means:  "इसका अर्थ:",
        result_your_inputs: "आपके इनपुट — चिकित्सा संदर्भ के साथ",
        result_measured:    "मापा गया:",

        // ── Medical note ─────────────────────────────────────
        medical_note:       "महत्वपूर्ण चिकित्सा नोट",
        medical_desc:       "यह भविष्यवाणी सांख्यिकीय पैटर्न पर आधारित है और चिकित्सा निदान की जगह नहीं ले सकती।",
        medical_item1:      "HbA1c स्तर (3 माह का औसत रक्त शर्करा)",
        medical_item2:      "मौखिक ग्लूकोज सहनशीलता परीक्षण (OGTT)",
        medical_item3:      "योग्य स्वास्थ्य पेशेवर द्वारा नैदानिक मूल्यांकन",
        medical_footer:     "यदि आप अपने परिणामों के बारे में चिंतित हैं तो कृपया डॉक्टर से मिलें।",
        educational_note:   "केवल शैक्षिक उद्देश्य के लिए। कृपया योग्य डॉक्टर से परामर्श लें।",

        // ── History page ─────────────────────────────────────
        total_checks:       "कुल जांच",
        diabetes_checks:    "मधुमेह जांच",
        heart_checks:       "हृदय जांच",
        avg_probability:    "औसत संभावना",
        risk_trend:         "समय के साथ जोखिम प्रवृत्ति",
        all_predictions:    "सभी भविष्यवाणियां",
        no_predictions:     "अभी तक कोई भविष्यवाणी नहीं",
        no_pred_desc:       "समय के साथ अपने स्वास्थ्य जोखिम को ट्रैक करने के लिए पहली भविष्यवाणी करें।",
        col_date:           "तारीख",
        col_time:           "समय",
        col_type:           "प्रकार",
        col_prediction:     "भविष्यवाणी",
        col_risk:           "जोखिम",
        col_probability:    "संभावना",

        // ── Tips page ────────────────────────────────────────
        tips_diet_eat:      "आहार — क्या खाएं",
        tips_diet_avoid:    "आहार — क्या सीमित करें",
        tips_exercise:      "व्यायाम — अधिक चलें",
        tips_lifestyle:     "जीवनशैली की आदतें",
        tips_numbers:       "अपने नंबर जानें",
        tips_check_risk:    "अभी अपना जोखिम जांचें",
    }
};

// ── i18n engine ───────────────────────────────────────────
function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    // Save to localStorage
    localStorage.setItem('language', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.style.background = btn.dataset.lang === lang
            ? 'rgba(255,255,255,0.5)'
            : 'rgba(255,255,255,0.2)';
        btn.style.fontWeight = btn.dataset.lang === lang ? '700' : '400';
    });

    // Re-render BMI widget result in the new language (if present)
    if (typeof calculateBMI === 'function') {
        const h = document.getElementById('height_input');
        const w = document.getElementById('weight_input');
        if (h && w && h.value && w.value) {
            calculateBMI();
        }
    }
}

function initLanguage() {
    const saved = localStorage.getItem('language') || 'en';
    applyLanguage(saved);
}