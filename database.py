import sqlite3
from datetime import datetime
import pytz

DB_PATH = 'predictions.db'


def init_db():
    """Create the predictions table if it doesn't exist."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS predictions (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            date        TEXT NOT NULL,
            time        TEXT NOT NULL,
            type        TEXT NOT NULL,
            risk        TEXT NOT NULL,
            probability REAL NOT NULL,
            prediction  TEXT NOT NULL,
            color       TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


def save_prediction(pred_type, risk, probability, prediction, color):
    """Save a prediction to the database."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    IST = pytz.timezone('Asia/Kolkata')
    now = datetime.now(IST)
    c.execute('''
        INSERT INTO predictions
        (date, time, type, risk, probability, prediction, color)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        now.strftime("%d %b %Y"),
        now.strftime("%I:%M %p"),
        pred_type,
        risk,
        round(probability, 1),
        prediction,
        color
    ))
    conn.commit()
    conn.close()


def get_all_predictions():
    """Return all predictions newest first."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute('''
        SELECT * FROM predictions
        ORDER BY id DESC
    ''')
    rows = c.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def get_recent_predictions(limit=10):
    """Return most recent N predictions."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute('''
        SELECT * FROM predictions
        ORDER BY id DESC
        LIMIT ?
    ''', (limit,))
    rows = c.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def get_stats():
    """Return summary statistics."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    # Total predictions
    c.execute("SELECT COUNT(*) FROM predictions")
    total = c.fetchone()[0]

    # Diabetes predictions
    c.execute("SELECT COUNT(*) FROM predictions WHERE type='Diabetes'")
    diabetes_count = c.fetchone()[0]

    # Heart predictions
    c.execute("SELECT COUNT(*) FROM predictions WHERE type='Heart'")
    heart_count = c.fetchone()[0]

    # Average probability
    c.execute("SELECT AVG(probability) FROM predictions")
    avg_prob = c.fetchone()[0] or 0

    # High risk count
    c.execute("SELECT COUNT(*) FROM predictions WHERE risk='High'")
    high_risk = c.fetchone()[0]

    conn.close()
    return {
        'total':          total,
        'diabetes_count': diabetes_count,
        'heart_count':    heart_count,
        'avg_prob':       round(avg_prob, 1),
        'high_risk':      high_risk,
    }


def clear_history():
    """Delete all predictions."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("DELETE FROM predictions")
    conn.commit()
    conn.close()