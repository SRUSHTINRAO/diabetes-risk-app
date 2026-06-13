// ── Reference averages by age group and gender ─────────────
// Sources: ICMR, WHO, NHANES adapted for Indian population
const AVERAGES = {
    female: {
        "18-29": {
            glucose:     89.2,
            bmi:         21.8,
            bloodpressure: 70.1,
            insulin:     74.5,
            skinthickness: 23.4,
        },
        "30-44": {
            glucose:     96.4,
            bmi:         24.1,
            bloodpressure: 74.2,
            insulin:     82.3,
            skinthickness: 27.1,
        },
        "45-59": {
            glucose:    104.8,
            bmi:         26.3,
            bloodpressure: 78.6,
            insulin:     91.4,
            skinthickness: 29.8,
        },
        "60+": {
            glucose:    112.3,
            bmi:         25.8,
            bloodpressure: 80.4,
            insulin:     88.2,
            skinthickness: 27.6,
        },
    },
    male: {
        "18-29": {
            glucose:     91.4,
            bmi:         22.3,
            bloodpressure: 72.4,
            insulin:     68.2,
            skinthickness: 16.2,
        },
        "30-44": {
            glucose:     99.1,
            bmi:         24.8,
            bloodpressure: 76.3,
            insulin:     78.6,
            skinthickness: 18.4,
        },
        "45-59": {
            glucose:    107.2,
            bmi:         25.9,
            bloodpressure: 80.1,
            insulin:     86.3,
            skinthickness: 19.8,
        },
        "60+": {
            glucose:    114.6,
            bmi:         25.1,
            bloodpressure: 81.8,
            insulin:     83.4,
            skinthickness: 18.6,
        },
    }
};

// ── Get age group from age ─────────────────────────────────
function getAgeGroup(age) {
    if (age < 30)  return "18-29";
    if (age < 45)  return "30-44";
    if (age < 60)  return "45-59";
    return "60+";
}

// ── Get averages for a user ────────────────────────────────
function getAverages(age, gender) {
    const group = getAgeGroup(age);
    return {
        averages: AVERAGES[gender][group],
        ageGroup: group,
        gender:   gender
    };
}

// ── Compare a value to average ─────────────────────────────
// Returns { diff, pct, status, color, arrow }
function compareValue(userVal, avgVal, lowerIsBetter) {
    const diff = userVal - avgVal;
    const pct  = Math.abs((diff / avgVal) * 100).toFixed(1);

    let status, color, arrow;

    if (Math.abs(diff) / avgVal < 0.05) {
        // Within 5% = near average
        status = "Near average";
        color  = "#28a745";
        arrow  = "≈";
    } else if (lowerIsBetter) {
        if (diff > 0) {
            status = "Above average";
            color  = diff / avgVal > 0.15 ? "#c62828" : "#e65100";
            arrow  = "▲";
        } else {
            status = "Below average";
            color  = "#28a745";
            arrow  = "▼";
        }
    } else {
        // higher is better (e.g. max heart rate)
        if (diff < 0) {
            status = "Below average";
            color  = diff / avgVal < -0.15 ? "#c62828" : "#e65100";
            arrow  = "▼";
        } else {
            status = "Above average";
            color  = "#28a745";
            arrow  = "▲";
        }
    }

    return { diff: diff.toFixed(1), pct, status, color, arrow };
}

// ── Build full comparison for all fields ───────────────────
function buildComparison(userValues, age, gender) {
    const { averages, ageGroup } = getAverages(age, gender);

    return {
        ageGroup,
        gender,
        fields: [
            {
                label:         "Glucose",
                unit:          "mg/dL",
                userVal:       userValues.glucose,
                avgVal:        averages.glucose,
                lowerIsBetter: true,
                ...compareValue(userValues.glucose,
                                averages.glucose, true)
            },
            {
                label:         "BMI",
                unit:          "",
                userVal:       userValues.bmi,
                avgVal:        averages.bmi,
                lowerIsBetter: true,
                ...compareValue(userValues.bmi,
                                averages.bmi, true)
            },
            {
                label:         "Blood Pressure",
                unit:          "mm Hg",
                userVal:       userValues.bloodpressure,
                avgVal:        averages.bloodpressure,
                lowerIsBetter: true,
                ...compareValue(userValues.bloodpressure,
                                averages.bloodpressure, true)
            },
            {
                label:         "Insulin",
                unit:          "uU/mL",
                userVal:       userValues.insulin,
                avgVal:        averages.insulin,
                lowerIsBetter: true,
                ...compareValue(userValues.insulin,
                                averages.insulin, true)
            },
            {
                label:         "Skin Thickness",
                unit:          "mm",
                userVal:       userValues.skinthickness,
                avgVal:        averages.skinthickness,
                lowerIsBetter: true,
                ...compareValue(userValues.skinthickness,
                                averages.skinthickness, true)
            },
        ]
    };
}

// ── Render comparison table into a container ───────────────
function renderComparison(containerId, userValues, age, gender) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const comp = buildComparison(userValues, age, gender);
    const genderLabel = gender === 'female' ? 'Female' : 'Male';

    let html = `
        <h6 class="fw-bold mt-4">
            📊 <span data-i18n="comparison_title">
                Your Values vs Population Average
            </span>
        </h6>
        <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:10px;">
            Compared to average
            <strong>${genderLabel}, Age ${comp.ageGroup}</strong>
            (Indian population reference)
        </p>
        <div class="table-responsive">
        <table class="table table-sm table-bordered"
               style="font-size:0.85rem;">
            <thead style="background:var(--table-alt);">
                <tr>
                    <th style="color:var(--text);">Parameter</th>
                    <th style="color:var(--text); text-align:center;">You</th>
                    <th style="color:var(--text); text-align:center;">Avg</th>
                    <th style="color:var(--text); text-align:center;">Diff</th>
                    <th style="color:var(--text); text-align:center;">Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    comp.fields.forEach(f => {
        html += `
            <tr>
                <td style="color:var(--text); font-weight:600;">
                    ${f.label}
                </td>
                <td style="color:var(--text); text-align:center;">
                    <strong>${f.userVal}</strong>
                    <span style="font-size:0.75rem;
                                 color:var(--text-muted);">
                        ${f.unit}
                    </span>
                </td>
                <td style="color:var(--text-muted); text-align:center;">
                    ${f.avgVal}
                    <span style="font-size:0.75rem;">
                        ${f.unit}
                    </span>
                </td>
                <td style="text-align:center;
                           color:${f.color};
                           font-weight:600;">
                    ${f.arrow} ${Math.abs(f.diff)}
                </td>
                <td style="text-align:center;">
                    <span style="background:${f.color}22;
                                 color:${f.color};
                                 padding:2px 8px;
                                 border-radius:12px;
                                 font-size:0.78rem;
                                 font-weight:600;">
                        ${f.status}
                    </span>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">
            ▲ Above average &nbsp;|&nbsp;
            ▼ Below average &nbsp;|&nbsp;
            ≈ Near average (&lt;5% difference)
            &nbsp;|&nbsp; Reference: ICMR / WHO Indian population data
        </p>
    `;

    container.innerHTML = html;
}