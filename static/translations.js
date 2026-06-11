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

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "Pregnancies",
        label_glucose:      "Glucose Level",
        label_bp:           "Blood Pressure",
        label_skin:         "Skin Thickness",
        label_insulin:      "Insulin Level",
        label_bmi:          "BMI",
        label_dpf:          "Diabetes Pedigree Function",
        label_age:          "Age",

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

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "ಗರ್ಭಧಾರಣೆಗಳು",
        label_glucose:      "ಗ್ಲೂಕೋಸ್ ಮಟ್ಟ",
        label_bp:           "ರಕ್ತದೊತ್ತಡ",
        label_skin:         "ಚರ್ಮದ ದಪ್ಪ",
        label_insulin:      "ಇನ್ಸುಲಿನ್ ಮಟ್ಟ",
        label_bmi:          "ಬಿಎಂಐ",
        label_dpf:          "ಮಧುಮೇಹ ವಂಶಾವಳಿ ಕಾರ್ಯ",
        label_age:          "ವಯಸ್ಸು",

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

        // ── Form labels ──────────────────────────────────────
        label_pregnancies:  "गर्भधारण",
        label_glucose:      "ग्लूकोज स्तर",
        label_bp:           "रक्तचाप",
        label_skin:         "त्वचा की मोटाई",
        label_insulin:      "इंसुलिन स्तर",
        label_bmi:          "बीएमआई",
        label_dpf:          "मधुमेह वंशावली कार्य",
        label_age:          "आयु",

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
}

function initLanguage() {
    const saved = localStorage.getItem('language') || 'en';
    applyLanguage(saved);
}