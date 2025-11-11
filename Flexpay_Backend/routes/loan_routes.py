from flask import Blueprint, request, jsonify
from models.loan import LoanRequest
from models.user import db

loan_bp = Blueprint("loan_bp", __name__)

# Borrower submits loan request
@loan_bp.route("/loan-request", methods=["POST"])
def loan_request():
    data = request.get_json()
    try:
        new_loan = LoanRequest(
            borrower_name=data.get("borrower_name", "Anonymous"),
            amount=data["amount"],
            interest_rate=data["interest_rate"],
            tenure=data["tenure"],
            purpose=data["purpose"],
            collateral=data.get("collateral", ""),
            income_proof=data.get("income_proof", "")
        )
        db.session.add(new_loan)
        db.session.commit()
        return jsonify({"message": "Loan request submitted successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400


# Lender fetches loan suggestions
@loan_bp.route("/loan-suggestions", methods=["GET"])
def get_loan_suggestions():
    loans = LoanRequest.query.order_by(LoanRequest.created_at.desc()).all()
    return jsonify([
        {
            "id": loan.id,
            "borrower_name": loan.borrower_name,
            "amount": loan.amount,
            "interest_rate": loan.interest_rate,
            "tenure": loan.tenure,
            "purpose": loan.purpose,
            "collateral": loan.collateral,
            "created_at": loan.created_at.strftime("%Y-%m-%d")
        } for loan in loans
    ])
