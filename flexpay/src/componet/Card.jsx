// src/components/Card.jsx
import React from "react";
import "./Card.css"; // Optional: if you move styles here

export default function Card({
  title,
  riskLevel,
  riskClass,
  loanId,
  description,
  interestRate,
  funded,
  total,
  progress,
  fullyFunded,
}) {
  return (
    <div className="  bg-white/60 backdrop-blur-md border border-[#67C090]/40 rounded-2xl shadow-lg p-6">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">{title}</h5>
            <span className={`risk-badge ${riskClass}`}>{riskLevel}</span>
          </div>
          {/* <p className="text-muted small">Loan ID: {loanId}</p> */}
          <p className="mb-3">{description}</p>
        </div>
        <div className="col-md-4 text-md-end">
          <div className="stat-label">Interest Rate (p.a.)</div>
          <div className="loan-rate">{interestRate}</div>
        </div>
      </div>

      <hr className="custom-divider my-3" />

      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="mb-2">
            <div className="d-flex justify-content-between">
              <span className="stat-label">Funding Progress</span>
              <span>
                ₹{funded} / ₹{total}
              </span>
            </div>
            <div className="progress mt-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            {fullyFunded ? (
              <button className="btn-gradient" disabled>
                Fully Funded
              </button>
            ) : (
              <>
                <input
                  type="number"
                  className="form-control w-60 me-3"
                  placeholder="Amount"
                />
                <button className="btn-gradient">Invest</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
