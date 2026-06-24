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

        // ── Guide page ────────────────────────────────────────
        guide_title:        "Health Metrics Guide",
        guide_subtitle:     "Understand every parameter used in your risk prediction",
        guide_intro:        "Click any parameter below to expand its full explanation, normal ranges and improvement tips.",
        guide_disclaimer:   "This guide is for educational purposes only. Normal ranges are reference values — your personal targets may differ. Always consult a qualified doctor for medical advice specific to your situation.",

        // Glucose
        g_glucose_title:    "Glucose (Blood Sugar)",
        g_glucose_badge:    "Key Predictor #1",
        g_what:             "What is it?",
        g_ranges:           "Normal Ranges (Indian Guidelines)",
        g_context:          "Why context matters",
        g_improve:          "How to improve it",
        g_glucose_what:     "Blood glucose is the amount of sugar circulating in your blood. Your body uses glucose as its primary energy source. The pancreas produces insulin to help cells absorb glucose — when this system fails, glucose builds up in the blood, leading to diabetes.",
        g_glucose_context:  "A glucose of 130 mg/dL is concerning if fasting (above the 126 diabetes threshold) but normal after a meal (below 140). Always note when your blood sugar was measured.",
        g_glucose_t1:       "Replace white rice and maida with ragi, jowar or brown rice — they digest slower and cause smaller blood sugar spikes.",
        g_glucose_t2:       "A 20-minute walk after meals significantly lowers post-meal glucose — more effective than walking at other times.",
        g_glucose_t3:       "Stay well hydrated — dehydration concentrates blood sugar. Replace sugary drinks with water or buttermilk.",
        g_glucose_t4:       "Poor sleep raises blood sugar. Even one night of bad sleep can spike fasting glucose by 10–15%.",

        // BMI
        g_bmi_title:        "BMI (Body Mass Index)",
        g_bmi_badge:        "Key Predictor #2",
        g_bmi_what:         "BMI is your weight in kilograms divided by your height in metres squared (kg/m²). It is a simple screening tool to categorize weight status. Higher BMI increases insulin resistance — a key driver of Type 2 diabetes.",
        g_bmi_note:         "Note: Indian guidelines use lower thresholds than Western standards because Indians develop metabolic disease at lower BMIs.",
        g_bmi_t1:           "Even losing 3–5% of body weight (2–3 kg for most people) significantly reduces diabetes risk — you don't need to reach ideal BMI.",
        g_bmi_t2:           "Use smaller plates and eat slowly — it takes 20 minutes for your brain to register fullness. Reduce portion size before changing what you eat.",
        g_bmi_t3:           "Strength training builds muscle which burns more calories at rest. Even simple bodyweight exercises 3x/week make a difference.",
        g_bmi_t4:           "Cutting out sugary drinks alone (chai with 2 spoons sugar, soft drinks, packaged juices) can lead to 2–3 kg weight loss over 3 months.",

        // Blood Pressure
        g_bp_title:         "Blood Pressure",
        g_bp_what:          "Blood pressure measures the force of blood against artery walls. It has two numbers: systolic (when heart beats) / diastolic (when heart rests). This app uses the diastolic value (the lower number) which is more sensitive to early cardiovascular risk.",
        g_bp_link_title:    "Link to diabetes",
        g_bp_link:          "High blood pressure and diabetes frequently co-occur — they share common risk factors like obesity, inactivity and poor diet. Having both dramatically increases risk of kidney disease, stroke and heart attack.",
        g_bp_t1:            "Reduce salt intake — most Indians consume 2–3x the recommended amount. Avoid pickles, papads, processed foods and excessive salt in cooking.",
        g_bp_t2:            "Regular aerobic exercise (brisk walking 30 min daily) can lower diastolic BP by 4–9 mm Hg over weeks.",
        g_bp_t3:            "Chronic stress raises BP. Even 10 minutes of deep breathing or meditation daily has measurable effects.",

        // Insulin
        g_ins_title:        "Insulin Level",
        g_ins_what:         "Insulin is a hormone produced by the pancreas that allows cells to absorb glucose from the blood. In Type 2 diabetes, cells become resistant to insulin — so the pancreas produces more, leading to high insulin levels. Eventually the pancreas may burn out, leading to low insulin.",
        g_ins_zero:         "Zero value note",
        g_ins_zero_text:    "Many people don't know their insulin level — if you entered 0, the model uses dataset averages for this field. Getting your fasting insulin tested gives a much more accurate risk picture.",
        g_ins_t1:           "Exercise is the most powerful way to improve insulin sensitivity — muscles absorb glucose without needing insulin during activity.",
        g_ins_t2:           "Eat more legumes and fibre — dal, rajma, chana slow digestion and reduce insulin spikes after meals.",
        g_ins_t3:           "Intermittent fasting (eating within a 10-hour window) can significantly improve insulin sensitivity over weeks.",

        // Skin Thickness
        g_skin_title:       "Skin Thickness",
        g_skin_what:        "Skin thickness (specifically triceps skinfold thickness) is measured using calipers to estimate subcutaneous body fat — the fat stored just under the skin. Higher skinfold thickness indicates higher overall body fat percentage, which is linked to insulin resistance.",
        g_skin_note:        "Practical note",
        g_skin_note_text:   "Most people don't have access to skinfold calipers. If you don't know this value, enter 20 (near population average) — it's better than entering 0 which the model will misinterpret as an actual measurement.",
        g_skin_t1:          "Combination of cardio (walking, cycling) and strength training reduces body fat more effectively than either alone.",
        g_skin_t2:          "Prioritize protein and fibre at every meal — they keep you full longer and reduce overall calorie intake naturally.",

        // DPF
        g_dpf_title:        "Diabetes Pedigree Function",
        g_dpf_badge:        "Genetic",
        g_dpf_what:         "The Diabetes Pedigree Function (DPF) is a score developed by researchers that quantifies genetic risk based on family history. It considers which relatives have diabetes and how closely related they are. A higher score means stronger inherited risk.",
        g_dpf_est:          "How to estimate your score",
        g_dpf_t1:           "Genetics loads the gun but lifestyle pulls the trigger. Studies show lifestyle changes reduce diabetes risk by 58% even in high genetic-risk groups.",
        g_dpf_t2:           "If you have a strong family history, start annual screening at age 25 instead of waiting — early detection is everything.",
        g_dpf_t3:           "Share your family history with your doctor — it changes their screening approach and may qualify you for preventive programs.",

        // Age
        g_age_title:        "Age",
        g_age_what:         "Diabetes risk increases with age due to gradual decline in insulin sensitivity, muscle mass loss, reduced physical activity, and accumulated metabolic stress. However, India is seeing rapidly increasing rates in young adults (25–44) due to lifestyle changes — making early screening important at any age.",
        g_age_t1:           "After 40, muscle mass naturally declines — add strength training to preserve it. More muscle means better glucose metabolism.",
        g_age_t2:           "After 45, get a comprehensive metabolic panel annually — glucose, HbA1c, cholesterol, kidney function, liver function.",

        // Pregnancies
        g_preg_title:       "Pregnancies",
        g_preg_what:        "The number of pregnancies is a risk factor because gestational diabetes (diabetes during pregnancy) is a strong predictor of later Type 2 diabetes. Women who had gestational diabetes have a 7–10x higher lifetime risk. Each additional pregnancy also adds metabolic stress.",
        g_preg_men:         "Note for men",
        g_preg_men_text:    "Enter 0 if you are male — this field will have no impact on your prediction. The model was trained on female data, so males using this tool should note the prediction may be slightly less accurate.",
        g_preg_t1:          "Get tested for diabetes 6–12 weeks after delivery and then every 1–3 years — your risk of developing Type 2 diabetes is significantly elevated.",
        g_preg_t2:          "Breastfeeding, maintaining healthy weight and regular exercise after pregnancy significantly reduce your long-term risk.",

        // Table headers
        g_condition:        "Condition",
        g_fasting:          "Fasting",
        g_postmeal:         "Post-Meal (2hr)",
        g_category:         "Category",
        g_asian_bmi:        "Asian BMI",
        g_western_bmi:      "Western BMI",
        g_status:           "Status",
        g_diastolic:        "Diastolic (mm Hg)",
        g_insulin_fasting:  "Fasting Insulin (µU/mL)",
        g_skin_range:       "Range (mm)",
        g_risk_level:       "Risk Level",
        g_dpf_score:        "DPF Score",
        g_family_history:   "Family History",
        g_approx_dpf:       "Approximate DPF",
        g_age_group:        "Age Group",
        g_recommendation:   "Recommendation",
        g_pregnancies:      "Pregnancies",

        // Table values
        g_normal:           "Normal",
        g_prediabetes:      "Prediabetes",
        g_diabetes:         "Diabetes",
        g_overweight:       "Overweight",
        g_obese:            "Obese",
        g_low:              "Low",
        g_elevated:         "Elevated",
        g_high_s1:          "High (Stage 1)",
        g_high_s2:          "High (Stage 2)",
        g_low_resistance:   "Low (insulin resistance)",
        g_low_unmeasured:   "Low (may be unmeasured)",
        g_no_family:        "No family history",
        g_one_gp:           "One grandparent with diabetes",
        g_one_parent:       "One parent with diabetes",
        g_both_parents:     "Both parents with diabetes",
        g_multiple:         "Multiple close relatives",
        g_under30:          "Under 30",
        g_30_44:            "30–44",
        g_45_59:            "45–59",
        g_60plus:           "60+",
        g_screen_family:    "Screen if family history",
        g_screen_2yr:       "Screen every 2 years",
        g_screen_annual:    "Screen annually",
        g_screen_6mo:       "Screen every 6 months",
        g_no_gest:          "No gestational history",
        g_low_risk:         "Low added risk",
        g_mod_risk:         "Moderate added risk",
        g_high_risk_screen: "Higher risk — screen regularly",

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

        // ── Guide page ────────────────────────────────────────
        guide_title:        "ಆರೋಗ್ಯ ಮೆಟ್ರಿಕ್ಸ್ ಮಾರ್ಗದರ್ಶಿ",
        guide_subtitle:     "ನಿಮ್ಮ ಅಪಾಯ ಮುನ್ಸೂಚನೆಯಲ್ಲಿ ಬಳಸಿದ ಪ್ರತಿಯೊಂದು ನಿಯತಾಂಕವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
        guide_subtitle:     "ನಿಮ್ಮ ಅಪಾಯ ಮುನ್ಸೂಚನೆಯಲ್ಲಿ ಬಳಸಿದ ಪ್ರತಿ ನಿಯತಾಂಕ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
        guide_intro:        "ಸಂಪೂರ್ಣ ವಿವರಣೆ, ಸಾಮಾನ್ಯ ಮಿತಿಗಳು ಮತ್ತು ಸುಧಾರಣಾ ಸಲಹೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ಯಾವುದೇ ನಿಯತಾಂಕದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        guide_disclaimer:   "ಈ ಮಾರ್ಗದರ್ಶಿ ಶಿಕ್ಷಣ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಸಾಮಾನ್ಯ ಮಿತಿಗಳು ಉಲ್ಲೇಖ ಮೌಲ್ಯಗಳಾಗಿವೆ. ದಯವಿಟ್ಟು ಅರ್ಹ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        g_glucose_title:    "ಗ್ಲೂಕೋಸ್ (ರಕ್ತದ ಸಕ್ಕರೆ)",
        g_glucose_badge:    "ಮುಖ್ಯ ಮುನ್ಸೂಚಕ #1",
        g_what:             "ಇದೇನು?",
        g_ranges:           "ಸಾಮಾನ್ಯ ಮಿತಿಗಳು (ಭಾರತೀಯ ಮಾರ್ಗಸೂಚಿಗಳು)",
        g_context:          "ಸಂದರ್ಭ ಏಕೆ ಮುಖ್ಯ",
        g_improve:          "ಇದನ್ನು ಹೇಗೆ ಸುಧಾರಿಸಬಹುದು",
        g_glucose_what:     "ರಕ್ತದ ಗ್ಲೂಕೋಸ್ ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿ ಚಲಿಸುವ ಸಕ್ಕರೆಯ ಪ್ರಮಾಣ. ನಿಮ್ಮ ದೇಹ ಗ್ಲೂಕೋಸ್ ಅನ್ನು ಪ್ರಾಥಮಿಕ ಶಕ್ತಿ ಮೂಲವಾಗಿ ಬಳಸುತ್ತದೆ. ಮೇದೋಜ್ಜೀರಕ ಗ್ರಂಥಿ ಇನ್ಸುಲಿನ್ ಉತ್ಪಾದಿಸುತ್ತದೆ — ಈ ವ್ಯವಸ್ಥೆ ವಿಫಲವಾದಾಗ ಮಧುಮೇಹ ಉಂಟಾಗುತ್ತದೆ.",
        g_glucose_context:  "130 mg/dL ಗ್ಲೂಕೋಸ್ ಉಪವಾಸದಲ್ಲಿ ಆಂದೋಳನಕಾರಿ (126 ಮಧುಮೇಹ ಮಿತಿಗಿಂತ ಹೆಚ್ಚು) ಆದರೆ ಊಟದ ನಂತರ ಸಾಮಾನ್ಯ (140 ಕ್ಕಿಂತ ಕಡಿಮೆ). ರಕ್ತದ ಸಕ್ಕರೆ ಯಾವಾಗ ಅಳೆಯಲಾಯಿತು ಎಂದು ಯಾವಾಗಲೂ ಗಮನಿಸಿ.",
        g_glucose_t1:       "ಬಿಳಿ ಅಕ್ಕಿ ಮತ್ತು ಮೈದಾ ಬದಲಿಗೆ ರಾಗಿ, ಜೋಳ ಅಥವಾ ಕಂದು ಅಕ್ಕಿ ಬಳಸಿ — ಇವು ನಿಧಾನವಾಗಿ ಜೀರ್ಣವಾಗುತ್ತವೆ ಮತ್ತು ರಕ್ತದ ಸಕ್ಕರೆ ಹೆಚ್ಚಾಗುವುದನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
        g_glucose_t2:       "ಊಟದ ನಂತರ 20 ನಿಮಿಷ ನಡೆಯುವುದು ಊಟದ ನಂತರದ ಗ್ಲೂಕೋಸ್ ಅನ್ನು ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        g_glucose_t3:       "ಚೆನ್ನಾಗಿ ನೀರು ಕುಡಿಯಿರಿ — ನಿರ್ಜಲೀಕರಣ ರಕ್ತದ ಸಕ್ಕರೆ ಸಾಂದ್ರತೆ ಹೆಚ್ಚಿಸುತ್ತದೆ. ಸಿಹಿ ಪಾನೀಯಗಳ ಬದಲಿಗೆ ನೀರು ಅಥವಾ ಮಜ್ಜಿಗೆ ಕುಡಿಯಿರಿ.",
        g_glucose_t4:       "ಕಳಪೆ ನಿದ್ರೆ ರಕ್ತದ ಸಕ್ಕರೆ ಹೆಚ್ಚಿಸುತ್ತದೆ. ಒಂದು ರಾತ್ರಿ ಕೆಟ್ಟ ನಿದ್ರೆಯೂ ಉಪವಾಸ ಗ್ಲೂಕೋಸ್ ಅನ್ನು 10–15% ಹೆಚ್ಚಿಸಬಹುದು.",
        g_bmi_title:        "ಬಿಎಂಐ (ದೇಹ ತೂಕ ಸೂಚಿ)",
        g_bmi_badge:        "ಮುಖ್ಯ ಮುನ್ಸೂಚಕ #2",
        g_bmi_what:         "ಬಿಎಂಐ ನಿಮ್ಮ ತೂಕ (ಕಿಲೋಗ್ರಾಂ) ಅನ್ನು ಎತ್ತರದ (ಮೀಟರ್) ವರ್ಗದಿಂದ ಭಾಗಿಸಿ ಪಡೆಯಲಾಗುತ್ತದೆ. ಹೆಚ್ಚಿನ ಬಿಎಂಐ ಇನ್ಸುಲಿನ್ ಪ್ರತಿರೋಧ ಹೆಚ್ಚಿಸುತ್ತದೆ — ಟೈಪ್ 2 ಮಧುಮೇಹದ ಪ್ರಮುಖ ಕಾರಣ.",
        g_bmi_note:         "ಸೂಚನೆ: ಭಾರತೀಯ ಮಾರ್ಗಸೂಚಿಗಳು ಪಾಶ್ಚಿಮಾತ್ಯ ಮಾನದಂಡಗಳಿಗಿಂತ ಕಡಿಮೆ ಮಿತಿಗಳನ್ನು ಬಳಸುತ್ತವೆ ಏಕೆಂದರೆ ಭಾರತೀಯರು ಕಡಿಮೆ ಬಿಎಂಐನಲ್ಲಿ ಚಯಾಪಚಯ ರೋಗ ಬೆಳೆಸಿಕೊಳ್ಳುತ್ತಾರೆ.",
        g_bmi_t1:           "ದೇಹ ತೂಕದ 3–5% ಕಳೆದುಕೊಳ್ಳುವುದು (ಹೆಚ್ಚಿನ ಜನರಿಗೆ 2–3 ಕೆಜಿ) ಮಧುಮೇಹ ಅಪಾಯ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        g_bmi_t2:           "ಸಣ್ಣ ತಟ್ಟೆ ಬಳಸಿ ಮತ್ತು ನಿಧಾನವಾಗಿ ತಿನ್ನಿ — ಮೆದುಳಿಗೆ ತೃಪ್ತಿ ಅನುಭವಿಸಲು 20 ನಿಮಿಷ ಬೇಕಾಗುತ್ತದೆ.",
        g_bmi_t3:           "ಶಕ್ತಿ ತರಬೇತಿ ಸ್ನಾಯು ನಿರ್ಮಿಸುತ್ತದೆ — ಇದು ವಿಶ್ರಾಂತಿಯಲ್ಲಿಯೂ ಹೆಚ್ಚು ಕ್ಯಾಲೋರಿ ಸುಡುತ್ತದೆ.",
        g_bmi_t4:           "ಸಿಹಿ ಪಾನೀಯಗಳನ್ನು ಕಡಿತಗೊಳಿಸುವುದು ಮಾತ್ರ (ಸಕ್ಕರೆ ಚಹಾ, ಕೋಲ್ಡ್ ಡ್ರಿಂಕ್, ಪ್ಯಾಕೇಜ್ಡ್ ಜ್ಯೂಸ್) 3 ತಿಂಗಳಲ್ಲಿ 2–3 ಕೆಜಿ ತೂಕ ಇಳಿಸಬಹುದು.",
        g_bp_title:         "ರಕ್ತದೊತ್ತಡ",
        g_bp_what:          "ರಕ್ತದೊತ್ತಡ ರಕ್ತನಾಳಗಳ ಗೋಡೆಗಳ ಮೇಲೆ ರಕ್ತದ ಬಲವನ್ನು ಅಳೆಯುತ್ತದೆ. ಈ ಅಪ್ಲಿಕೇಶನ್ ಡಯಾಸ್ಟೊಲಿಕ್ ಮೌಲ್ಯ (ಕಡಿಮೆ ಸಂಖ್ಯೆ) ಬಳಸುತ್ತದೆ ಇದು ಆರಂಭಿಕ ಹೃದಯರಕ್ತನಾಳ ಅಪಾಯಕ್ಕೆ ಹೆಚ್ಚು ಸಂವೇದನಾಶೀಲ.",
        g_bp_link_title:    "ಮಧುಮೇಹದೊಂದಿಗೆ ಸಂಬಂಧ",
        g_bp_link:          "ಅಧಿಕ ರಕ್ತದೊತ್ತಡ ಮತ್ತು ಮಧುಮೇಹ ಹೆಚ್ಚಾಗಿ ಒಟ್ಟಿಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ — ಎರಡೂ ಇದ್ದರೆ ಮೂತ್ರಪಿಂಡ ರೋಗ, ಪಾರ್ಶ್ವವಾಯು ಮತ್ತು ಹೃದಯಾಘಾತದ ಅಪಾಯ ಹೆಚ್ಚಾಗುತ್ತದೆ.",
        g_bp_t1:            "ಉಪ್ಪಿನ ಸೇವನೆ ಕಡಿಮೆ ಮಾಡಿ — ಹೆಚ್ಚಿನ ಭಾರತೀಯರು ಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರಮಾಣಕ್ಕಿಂತ 2–3 ಪಟ್ಟು ಹೆಚ್ಚು ಉಪ್ಪು ಸೇವಿಸುತ್ತಾರೆ.",
        g_bp_t2:            "ನಿಯಮಿತ ವ್ಯಾಯಾಮ (ದಿನಕ್ಕೆ 30 ನಿಮಿಷ ಬ್ರಿಸ್ಕ್ ವಾಕಿಂಗ್) ವಾರಗಳಲ್ಲಿ ಡಯಾಸ್ಟೊಲಿಕ್ ಒತ್ತಡ 4–9 mm Hg ಕಡಿಮೆ ಮಾಡಬಹುದು.",
        g_bp_t3:            "ದೀರ್ಘಕಾಲದ ಒತ್ತಡ ರಕ್ತದೊತ್ತಡ ಹೆಚ್ಚಿಸುತ್ತದೆ. ದಿನಕ್ಕೆ 10 ನಿಮಿಷ ಧ್ಯಾನ ಮಾಡಿದರೂ ಅಳೆಯಬಹುದಾದ ಪರಿಣಾಮ ಇರುತ್ತದೆ.",
        g_ins_title:        "ಇನ್ಸುಲಿನ್ ಮಟ್ಟ",
        g_ins_what:         "ಇನ್ಸುಲಿನ್ ಮೇದೋಜ್ಜೀರಕ ಗ್ರಂಥಿಯಿಂದ ಉತ್ಪಾದಿಸಲ್ಪಡುವ ಹಾರ್ಮೋನ್ ಆಗಿದ್ದು ಕೋಶಗಳಿಗೆ ಗ್ಲೂಕೋಸ್ ಹೀರಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಟೈಪ್ 2 ಮಧುಮೇಹದಲ್ಲಿ ಕೋಶಗಳು ಇನ್ಸುಲಿನ್ ಗೆ ಪ್ರತಿರೋಧ ತೋರಿಸುತ್ತವೆ.",
        g_ins_zero:         "ಶೂನ್ಯ ಮೌಲ್ಯದ ಬಗ್ಗೆ",
        g_ins_zero_text:    "ಅನೇಕ ಜನರಿಗೆ ತಮ್ಮ ಇನ್ಸುಲಿನ್ ಮಟ್ಟ ತಿಳಿದಿರುವುದಿಲ್ಲ — 0 ನಮೂದಿಸಿದರೆ ಮಾದರಿ ಡೇಟಾಸೆಟ್ ಸರಾಸರಿ ಬಳಸುತ್ತದೆ. ಉಪವಾಸ ಇನ್ಸುಲಿನ್ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ.",
        g_ins_t1:           "ವ್ಯಾಯಾಮ ಇನ್ಸುಲಿನ್ ಸಂವೇದನಶೀಲತೆ ಸುಧಾರಿಸಲು ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಮಾರ್ಗ.",
        g_ins_t2:           "ದ್ವಿದಳ ಧಾನ್ಯಗಳು ಮತ್ತು ನಾರು ತಿನ್ನಿ — ದಾಲ್, ರಾಜ್ಮಾ, ಚನಾ ಜೀರ್ಣಕ್ರಿಯೆ ನಿಧಾನಗೊಳಿಸಿ ಇನ್ಸುಲಿನ್ ಉಲ್ಬಣ ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
        g_ins_t3:           "ಇಂಟರ್ಮಿಟೆಂಟ್ ಫಾಸ್ಟಿಂಗ್ (10 ಗಂಟೆಯ ಅವಧಿಯಲ್ಲಿ ತಿನ್ನುವುದು) ವಾರಗಳಲ್ಲಿ ಇನ್ಸುಲಿನ್ ಸಂವೇದನಶೀಲತೆ ಸುಧಾರಿಸಬಹುದು.",
        g_skin_title:       "ಚರ್ಮದ ದಪ್ಪ",
        g_skin_what:        "ಚರ್ಮದ ದಪ್ಪ (ಟ್ರೈಸೆಪ್ಸ್ ಸ್ಕಿನ್ ಫೋಲ್ಡ್) ಚರ್ಮದ ಕೆಳಗೆ ಸಂಗ್ರಹವಾದ ಕೊಬ್ಬು ಅಂದಾಜು ಮಾಡಲು ಅಳೆಯಲಾಗುತ್ತದೆ. ಹೆಚ್ಚಿನ ಮೌಲ್ಯ ಇನ್ಸುಲಿನ್ ಪ್ರತಿರೋಧಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ.",
        g_skin_note:        "ಪ್ರಾಯೋಗಿಕ ಟಿಪ್ಪಣಿ",
        g_skin_note_text:   "ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಸ್ಕಿನ್ ಫೋಲ್ಡ್ ಕ್ಯಾಲಿಪರ್ ಲಭ್ಯವಿರುವುದಿಲ್ಲ. ಈ ಮೌಲ್ಯ ತಿಳಿದಿಲ್ಲದಿದ್ದರೆ 20 ನಮೂದಿಸಿ — ಇದು 0 ನಮೂದಿಸುವುದಕ್ಕಿಂತ ಉತ್ತಮ.",
        g_skin_t1:          "ಕಾರ್ಡಿಯೊ ಮತ್ತು ಶಕ್ತಿ ತರಬೇತಿ ಸಂಯೋಜನೆ ದೇಹದ ಕೊಬ್ಬು ಪ್ರತ್ಯೇಕವಾಗಿ ಮಾಡುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        g_skin_t2:          "ಪ್ರತಿ ಊಟದಲ್ಲಿ ಪ್ರೋಟೀನ್ ಮತ್ತು ನಾರು ಆದ್ಯತೆ ನೀಡಿ — ಇವು ಹೆಚ್ಚು ಕಾಲ ತೃಪ್ತಿ ನೀಡುತ್ತವೆ.",
        g_dpf_title:        "ಮಧುಮೇಹ ವಂಶಾವಳಿ ಕಾರ್ಯ",
        g_dpf_badge:        "ಜೆನೆಟಿಕ್",
        g_dpf_what:         "ಮಧುಮೇಹ ವಂಶಾವಳಿ ಕಾರ್ಯ (DPF) ಕುಟುಂಬದ ಇತಿಹಾಸದ ಆಧಾರದ ಮೇಲೆ ಆನುವಂಶಿಕ ಅಪಾಯ ಲೆಕ್ಕ ಹಾಕುವ ಸ್ಕೋರ್. ಹೆಚ್ಚಿನ ಸ್ಕೋರ್ ಬಲವಾದ ಆನುವಂಶಿಕ ಅಪಾಯ ಸೂಚಿಸುತ್ತದೆ.",
        g_dpf_est:          "ನಿಮ್ಮ ಸ್ಕೋರ್ ಅಂದಾಜು ಮಾಡುವುದು",
        g_dpf_t1:           "ಜೆನೆಟಿಕ್ಸ್ ಅಪಾಯ ಹೆಚ್ಚಿಸುತ್ತದೆ ಆದರೆ ಜೀವನಶೈಲಿ ಬದಲಾವಣೆ ಅಪಾಯ 58% ಕಡಿಮೆ ಮಾಡಬಹುದು — ಹೆಚ್ಚಿನ ಆನುವಂಶಿಕ ಅಪಾಯ ಗುಂಪಿನಲ್ಲಿಯೂ ಸಹ.",
        g_dpf_t2:           "ಬಲವಾದ ಕುಟುಂಬ ಇತಿಹಾಸ ಇದ್ದರೆ 25 ವರ್ಷದಿಂದಲೇ ವಾರ್ಷಿಕ ತಪಾಸಣೆ ಪ್ರಾರಂಭಿಸಿ.",
        g_dpf_t3:           "ನಿಮ್ಮ ಕುಟುಂಬದ ಇತಿಹಾಸ ವೈದ್ಯರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ — ಇದು ಅವರ ತಪಾಸಣೆ ವಿಧಾನ ಬದಲಿಸಬಹುದು.",
        g_age_title:        "ವಯಸ್ಸು",
        g_age_what:         "ಇನ್ಸುಲಿನ್ ಸಂವೇದನಶೀಲತೆ ಕ್ರಮೇಣ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ವಯಸ್ಸಿನೊಂದಿಗೆ ಮಧುಮೇಹ ಅಪಾಯ ಹೆಚ್ಚಾಗುತ್ತದೆ. ಭಾರತದಲ್ಲಿ ಯುವ ವಯಸ್ಕರಲ್ಲಿ (25–44) ವೇಗವಾಗಿ ಹೆಚ್ಚುತ್ತಿದೆ.",
        g_age_t1:           "40 ರ ನಂತರ ಸ್ನಾಯು ದ್ರವ್ಯರಾಶಿ ಸ್ವಾಭಾವಿಕವಾಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ — ಶಕ್ತಿ ತರಬೇತಿ ಸೇರಿಸಿ.",
        g_age_t2:           "45 ರ ನಂತರ ಪ್ರತಿ ವರ್ಷ ಸಮಗ್ರ ಚಯಾಪಚಯ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
        g_preg_title:       "ಗರ್ಭಧಾರಣೆಗಳು",
        g_preg_what:        "ಗರ್ಭಾವಸ್ಥೆಯ ಮಧುಮೇಹ (ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿ ಮಧುಮೇಹ) ನಂತರ ಟೈಪ್ 2 ಮಧುಮೇಹದ ಪ್ರಬಲ ಮುನ್ಸೂಚಕ. ಗರ್ಭಾವಸ್ಥೆಯ ಮಧುಮೇಹ ಹೊಂದಿದ ಮಹಿಳೆಯರಿಗೆ 7–10 ಪಟ್ಟು ಹೆಚ್ಚಿನ ಜೀವಮಾನ ಅಪಾಯ ಇರುತ್ತದೆ.",
        g_preg_men:         "ಪುರುಷರಿಗೆ ಸೂಚನೆ",
        g_preg_men_text:    "ನೀವು ಪುರುಷರಾಗಿದ್ದರೆ 0 ನಮೂದಿಸಿ — ಈ ಕ್ಷೇತ್ರ ನಿಮ್ಮ ಮುನ್ಸೂಚನೆ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ.",
        g_preg_t1:          "ಹೆರಿಗೆಯ 6–12 ವಾರಗಳ ನಂತರ ಮಧುಮೇಹ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ನಂತರ ಪ್ರತಿ 1–3 ವರ್ಷಗಳಿಗೊಮ್ಮೆ.",
        g_preg_t2:          "ಎದೆ ಹಾಲು ಉಣಿಸುವುದು, ಆರೋಗ್ಯಕರ ತೂಕ ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ನಿಯಮಿತ ವ್ಯಾಯಾಮ ದೀರ್ಘಕಾಲೀನ ಅಪಾಯ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        g_condition:        "ಸ್ಥಿತಿ",
        g_fasting:          "ಉಪವಾಸ",
        g_postmeal:         "ಊಟದ ನಂತರ (2 ಗಂ)",
        g_category:         "ವರ್ಗ",
        g_asian_bmi:        "ಏಷ್ಯನ್ ಬಿಎಂಐ",
        g_western_bmi:      "ಪಾಶ್ಚಿಮಾತ್ಯ ಬಿಎಂಐ",
        g_status:           "ಸ್ಥಿತಿ",
        g_diastolic:        "ಡಯಾಸ್ಟೊಲಿಕ್ (mm Hg)",
        g_insulin_fasting:  "ಉಪವಾಸ ಇನ್ಸುಲಿನ್ (µU/mL)",
        g_skin_range:       "ವ್ಯಾಪ್ತಿ (mm)",
        g_risk_level:       "ಅಪಾಯ ಮಟ್ಟ",
        g_dpf_score:        "DPF ಸ್ಕೋರ್",
        g_family_history:   "ಕುಟುಂಬ ಇತಿಹಾಸ",
        g_approx_dpf:       "ಅಂದಾಜು DPF",
        g_age_group:        "ವಯಸ್ಸಿನ ಗುಂಪು",
        g_recommendation:   "ಶಿಫಾರಸು",
        g_pregnancies:      "ಗರ್ಭಧಾರಣೆಗಳು",
        g_normal:           "ಸಾಮಾನ್ಯ",
        g_prediabetes:      "ಪ್ರಿ-ಡಯಾಬಿಟಿಸ್",
        g_diabetes:         "ಮಧುಮೇಹ",
        g_overweight:       "ಅಧಿಕ ತೂಕ",
        g_obese:            "ಬೊಜ್ಜು",
        g_low:              "ಕಡಿಮೆ",
        g_elevated:         "ಹೆಚ್ಚಾಗಿದೆ",
        g_high_s1:          "ಅಧಿಕ (ಹಂತ 1)",
        g_high_s2:          "ಅಧಿಕ (ಹಂತ 2)",
        g_low_resistance:   "ಕಡಿಮೆ (ಇನ್ಸುಲಿನ್ ಪ್ರತಿರೋಧ)",
        g_low_unmeasured:   "ಕಡಿಮೆ (ಅಳೆಯಲಾಗಿಲ್ಲ)",
        g_no_family:        "ಕುಟುಂಬ ಇತಿಹಾಸ ಇಲ್ಲ",
        g_one_gp:           "ಒಬ್ಬ ಅಜ್ಜ/ಅಜ್ಜಿಗೆ ಮಧುಮೇಹ",
        g_one_parent:       "ಒಬ್ಬ ಪೋಷಕರಿಗೆ ಮಧುಮೇಹ",
        g_both_parents:     "ಇಬ್ಬರೂ ಪೋಷಕರಿಗೆ ಮಧುಮೇಹ",
        g_multiple:         "ಅನೇಕ ನಿಕಟ ಸಂಬಂಧಿಗಳು",
        g_under30:          "30 ವರ್ಷದ ಕೆಳಗೆ",
        g_30_44:            "30–44",
        g_45_59:            "45–59",
        g_60plus:           "60+",
        g_screen_family:    "ಕುಟುಂಬ ಇತಿಹಾಸ ಇದ್ದರೆ ತಪಾಸಣೆ",
        g_screen_2yr:       "ಪ್ರತಿ 2 ವರ್ಷಕ್ಕೊಮ್ಮೆ ತಪಾಸಣೆ",
        g_screen_annual:    "ವಾರ್ಷಿಕ ತಪಾಸಣೆ",
        g_screen_6mo:       "ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ತಪಾಸಣೆ",
        g_no_gest:          "ಗರ್ಭಾವಸ್ಥೆ ಇತಿಹಾಸ ಇಲ್ಲ",
        g_low_risk:         "ಕಡಿಮೆ ಅಧಿಕ ಅಪಾಯ",
        g_mod_risk:         "ಮಧ್ಯಮ ಅಧಿಕ ಅಪಾಯ",
        g_high_risk_screen: "ಹೆಚ್ಚಿನ ಅಪಾಯ — ನಿಯಮಿತ ತಪಾಸಣೆ ಮಾಡಿ",

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

        // ── Guide page ────────────────────────────────────────
        guide_title:        "स्वास्थ्य मेट्रिक्स गाइड",
        guide_subtitle:     "अपने जोखिम पूर्वानुमान में उपयोग किए गए हर मानक को समझें",
        guide_intro:        "पूरी व्याख्या, सामान्य सीमाएं और सुधार के सुझाव देखने के लिए किसी भी मानक पर क्लिक करें।",
        guide_disclaimer:   "यह गाइड केवल शैक्षिक उद्देश्य के लिए है। कृपया योग्य डॉक्टर से परामर्श लें।",
        g_glucose_title:    "ग्लूकोज (रक्त शर्करा)",
        g_glucose_badge:    "मुख्य भविष्यवक्ता #1",
        g_what:             "यह क्या है?",
        g_ranges:           "सामान्य सीमाएं (भारतीय दिशानिर्देश)",
        g_context:          "संदर्भ क्यों महत्वपूर्ण है",
        g_improve:          "इसे कैसे सुधारें",
        g_glucose_what:     "रक्त ग्लूकोज आपके रक्त में घूमने वाली शर्करा की मात्रा है। आपका शरीर ग्लूकोज को प्राथमिक ऊर्जा स्रोत के रूप में उपयोग करता है। अग्न्याशय इंसुलिन बनाता है — जब यह प्रणाली विफल होती है तो मधुमेह होता है।",
        g_glucose_context:  "130 mg/dL ग्लूकोज उपवास में चिंताजनक है (126 मधुमेह सीमा से ऊपर) लेकिन खाने के बाद सामान्य (140 से नीचे)। हमेशा नोट करें कि रक्त शर्करा कब मापी गई।",
        g_glucose_t1:       "सफेद चावल और मैदा की जगह रागी, ज्वार या भूरे चावल उपयोग करें — ये धीरे पचते हैं और रक्त शर्करा की वृद्धि कम करते हैं।",
        g_glucose_t2:       "खाने के बाद 20 मिनट टहलना भोजन के बाद की ग्लूकोज को काफी कम करता है।",
        g_glucose_t3:       "खूब पानी पिएं — निर्जलीकरण रक्त शर्करा को सांद्रित करता है। मीठे पेय की जगह पानी या छाछ पिएं।",
        g_glucose_t4:       "खराब नींद रक्त शर्करा बढ़ाती है। एक रात की खराब नींद भी उपवास ग्लूकोज को 10–15% बढ़ा सकती है।",
        g_bmi_title:        "बीएमआई (बॉडी मास इंडेक्स)",
        g_bmi_badge:        "मुख्य भविष्यवक्ता #2",
        g_bmi_what:         "बीएमआई आपका वजन (किलोग्राम) ऊंचाई (मीटर) के वर्ग से भाग देकर प्राप्त होता है। उच्च बीएमआई इंसुलिन प्रतिरोध बढ़ाता है — टाइप 2 मधुमेह का प्रमुख कारण।",
        g_bmi_note:         "नोट: भारतीय दिशानिर्देश पश्चिमी मानकों से कम सीमाएं उपयोग करते हैं क्योंकि भारतीय कम बीएमआई पर चयापचय रोग विकसित करते हैं।",
        g_bmi_t1:           "शरीर के वजन का 3–5% कम करना (अधिकांश लोगों के लिए 2–3 किग्रा) मधुमेह जोखिम काफी कम करता है।",
        g_bmi_t2:           "छोटी प्लेट उपयोग करें और धीरे खाएं — मस्तिष्क को तृप्ति महसूस करने में 20 मिनट लगते हैं।",
        g_bmi_t3:           "शक्ति प्रशिक्षण मांसपेशी बनाता है जो आराम में भी अधिक कैलोरी जलाती है।",
        g_bmi_t4:           "केवल मीठे पेय छोड़ने से (चीनी वाली चाय, कोल्ड ड्रिंक, पैकेज्ड जूस) 3 महीनों में 2–3 किग्रा वजन कम हो सकता है।",
        g_bp_title:         "रक्तचाप",
        g_bp_what:          "रक्तचाप धमनी की दीवारों पर रक्त के बल को मापता है। यह ऐप डायस्टोलिक मान (निचली संख्या) उपयोग करता है जो प्रारंभिक हृदय जोखिम के प्रति अधिक संवेदनशील है।",
        g_bp_link_title:    "मधुमेह से संबंध",
        g_bp_link:          "उच्च रक्तचाप और मधुमेह अक्सर साथ होते हैं — दोनों होने पर गुर्दे की बीमारी, स्ट्रोक और दिल का दौरा का जोखिम बहुत बढ़ जाता है।",
        g_bp_t1:            "नमक कम करें — अधिकांश भारतीय अनुशंसित मात्रा से 2–3 गुना अधिक नमक खाते हैं।",
        g_bp_t2:            "नियमित व्यायाम (रोज 30 मिनट तेज चलना) हफ्तों में डायस्टोलिक BP 4–9 mm Hg कम कर सकता है।",
        g_bp_t3:            "पुराना तनाव BP बढ़ाता है। रोज 10 मिनट गहरी सांस या ध्यान से मापने योग्य प्रभाव होता है।",
        g_ins_title:        "इंसुलिन स्तर",
        g_ins_what:         "इंसुलिन अग्न्याशय द्वारा उत्पादित हार्मोन है जो कोशिकाओं को ग्लूकोज अवशोषित करने देता है। टाइप 2 मधुमेह में कोशिकाएं इंसुलिन के प्रति प्रतिरोधी हो जाती हैं।",
        g_ins_zero:         "शून्य मान के बारे में",
        g_ins_zero_text:    "कई लोगों को अपना इंसुलिन स्तर नहीं पता — 0 दर्ज करने पर मॉडल डेटासेट औसत उपयोग करता है। उपवास इंसुलिन परीक्षण करवाना बेहतर है।",
        g_ins_t1:           "व्यायाम इंसुलिन संवेदनशीलता सुधारने का सबसे शक्तिशाली तरीका है।",
        g_ins_t2:           "दालें और फाइबर खाएं — दाल, राजमा, चना पाचन धीमा करते हैं और इंसुलिन स्पाइक कम करते हैं।",
        g_ins_t3:           "इंटरमिटेंट फास्टिंग (10 घंटे की अवधि में खाना) हफ्तों में इंसुलिन संवेदनशीलता सुधार सकती है।",
        g_skin_title:       "त्वचा की मोटाई",
        g_skin_what:        "त्वचा की मोटाई (ट्राइसेप्स स्किनफोल्ड) त्वचा के नीचे संग्रहीत वसा का अनुमान लगाने के लिए मापी जाती है। अधिक मोटाई इंसुलिन प्रतिरोध से जुड़ी है।",
        g_skin_note:        "व्यावहारिक नोट",
        g_skin_note_text:   "अधिकांश लोगों के पास स्किनफोल्ड कैलिपर नहीं होता। यदि यह मान नहीं पता तो 20 दर्ज करें — यह 0 दर्ज करने से बेहतर है।",
        g_skin_t1:          "कार्डियो और शक्ति प्रशिक्षण का संयोजन अकेले किसी एक से अधिक प्रभावी ढंग से शरीर की चर्बी कम करता है।",
        g_skin_t2:          "हर भोजन में प्रोटीन और फाइबर को प्राथमिकता दें — ये लंबे समय तक पेट भरा रखते हैं।",
        g_dpf_title:        "मधुमेह वंशावली कार्य",
        g_dpf_badge:        "आनुवंशिक",
        g_dpf_what:         "मधुमेह वंशावली कार्य (DPF) परिवार के इतिहास के आधार पर आनुवंशिक जोखिम मापने वाला स्कोर है। उच्च स्कोर मजबूत आनुवंशिक जोखिम दर्शाता है।",
        g_dpf_est:          "अपना स्कोर कैसे अनुमानित करें",
        g_dpf_t1:           "आनुवंशिकी जोखिम बढ़ाती है लेकिन जीवनशैली बदलाव मधुमेह जोखिम 58% कम कर सकता है — उच्च आनुवंशिक जोखिम वाले समूहों में भी।",
        g_dpf_t2:           "मजबूत पारिवारिक इतिहास होने पर 25 साल की उम्र से वार्षिक जांच शुरू करें।",
        g_dpf_t3:           "अपना पारिवारिक इतिहास डॉक्टर के साथ साझा करें — यह उनके जांच दृष्टिकोण को बदल सकता है।",
        g_age_title:        "आयु",
        g_age_what:         "इंसुलिन संवेदनशीलता में क्रमिक गिरावट के कारण उम्र के साथ मधुमेह जोखिम बढ़ता है। भारत में युवा वयस्कों (25–44) में तेजी से बढ़ रहा है।",
        g_age_t1:           "40 के बाद मांसपेशी द्रव्यमान स्वाभाविक रूप से घटता है — शक्ति प्रशिक्षण जोड़ें।",
        g_age_t2:           "45 के बाद हर साल व्यापक चयापचय पैनल करवाएं — ग्लूकोज, HbA1c, कोलेस्ट्रॉल, गुर्दे की कार्यप्रणाली।",
        g_preg_title:       "गर्भधारण",
        g_preg_what:        "गर्भावस्था में मधुमेह (जेस्टेशनल डायबिटीज) बाद में टाइप 2 मधुमेह का प्रबल संकेतक है। ऐसी महिलाओं को 7–10 गुना अधिक जीवनकाल जोखिम होता है।",
        g_preg_men:         "पुरुषों के लिए नोट",
        g_preg_men_text:    "पुरुष हैं तो 0 दर्ज करें — यह फ़ील्ड आपके पूर्वानुमान पर प्रभाव नहीं डालेगी।",
        g_preg_t1:          "प्रसव के 6–12 सप्ताह बाद मधुमेह परीक्षण करवाएं और फिर हर 1–3 साल में।",
        g_preg_t2:          "स्तनपान, स्वस्थ वजन बनाए रखना और नियमित व्यायाम दीर्घकालिक जोखिम काफी कम करते हैं।",
        g_condition:        "स्थिति",
        g_fasting:          "उपवास",
        g_postmeal:         "खाने के बाद (2 घं)",
        g_category:         "श्रेणी",
        g_asian_bmi:        "एशियाई बीएमआई",
        g_western_bmi:      "पश्चिमी बीएमआई",
        g_status:           "स्थिति",
        g_diastolic:        "डायस्टोलिक (mm Hg)",
        g_insulin_fasting:  "उपवास इंसुलिन (µU/mL)",
        g_skin_range:       "सीमा (mm)",
        g_risk_level:       "जोखिम स्तर",
        g_dpf_score:        "DPF स्कोर",
        g_family_history:   "पारिवारिक इतिहास",
        g_approx_dpf:       "अनुमानित DPF",
        g_age_group:        "आयु समूह",
        g_recommendation:   "सिफारिश",
        g_pregnancies:      "गर्भधारण",
        g_normal:           "सामान्य",
        g_prediabetes:      "प्रीडायबिटीज",
        g_diabetes:         "मधुमेह",
        g_overweight:       "अधिक वजन",
        g_obese:            "मोटापा",
        g_low:              "कम",
        g_elevated:         "ऊंचा",
        g_high_s1:          "उच्च (चरण 1)",
        g_high_s2:          "उच्च (चरण 2)",
        g_low_resistance:   "कम (इंसुलिन प्रतिरोध)",
        g_low_unmeasured:   "कम (नहीं मापा गया)",
        g_no_family:        "कोई पारिवारिक इतिहास नहीं",
        g_one_gp:           "एक दादा/नाना को मधुमेह",
        g_one_parent:       "एक माता-पिता को मधुमेह",
        g_both_parents:     "दोनों माता-पिता को मधुमेह",
        g_multiple:         "कई निकट संबंधी",
        g_under30:          "30 से कम",
        g_30_44:            "30–44",
        g_45_59:            "45–59",
        g_60plus:           "60+",
        g_screen_family:    "पारिवारिक इतिहास होने पर जांच",
        g_screen_2yr:       "हर 2 साल में जांच",
        g_screen_annual:    "वार्षिक जांच",
        g_screen_6mo:       "हर 6 महीने में जांच",
        g_no_gest:          "कोई गर्भावस्था इतिहास नहीं",
        g_low_risk:         "कम अतिरिक्त जोखिम",
        g_mod_risk:         "मध्यम अतिरिक्त जोखिम",
        g_high_risk_screen: "अधिक जोखिम — नियमित जांच करें",

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