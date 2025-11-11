from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from .user import db   # reuse the same db instance

class LoanRequest(db.Model):
    __tablename__ = "loan_requests"

    id = db.Column(db.Integer, primary_key=True)
    borrower_name = db.Column(db.String(100))
    amount = db.Column(db.Float, nullable=False)
    interest_rate = db.Column(db.Float, nullable=False)
    tenure = db.Column(db.Integer, nullable=False)
    purpose = db.Column(db.String(200), nullable=False)
    collateral = db.Column(db.String(100))
    income_proof = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
