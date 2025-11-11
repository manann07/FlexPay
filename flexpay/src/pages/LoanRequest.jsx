import React, { useState } from "react";
import Dashboard from "../componet/dashboard";
import TopBar from "../componet/topbar";

export default function LoanRequest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Form data states
  const [formData, setFormData] = useState({
    borrower_name: "",
    amount: "",
    interest_rate: "",
    tenure: "",
    purpose: "",
    collateral: "",
  });

  const steps = ["Loan Details", "Collateral", "Income Proof"];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // ✅ Backend Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loan-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit loan request!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend not reachable!");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#8DCFAB] text-[#263238]">
      {/* Sidebar */}
      <Dashboard />

      {/* Right Side */}
      <div className="pl-63 flex flex-col flex-1">
        {/* <TopBar currentPage="Loan Request" userInitial="G" /> */}

        <main className="p-6 pt-25">
          <h2 className="text-2xl font-bold mb-6">Loan Request</h2>

          <div className="bg-white/60 backdrop-blur-md border border-[#67C090]/40 rounded-2xl shadow-lg p-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
              <div
                className="h-2 rounded-full bg-[#67C090] transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Steps */}
            {submitted ? (
              <div className="text-center p-8">
                <div className="text-5xl mb-4 text-[#67C090]">✅</div>
                <h3 className="text-xl font-bold">Loan Request Submitted!</h3>
                <p className="text-gray-600 mt-2">
                  Your loan request has been submitted successfully.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(0);
                    setFormData({
                      borrower_name: "",
                      amount: "",
                      interest_rate: "",
                      tenure: "",
                      purpose: "",
                      collateral: "",
                    });
                  }}
                  className="mt-4 bg-[#8DCFAB] text-white px-6 py-2 rounded-lg hover:bg-[#7ac59f] transition"
                >
                  New Loan Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Loan Details */}
                {currentStep === 0 && (
                  <div>
                    <h5 className="font-semibold mb-4">Loan Details</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-gray-600">Borrower Name</label>
                        <input
                          name="borrower_name"
                          value={formData.borrower_name}
                          onChange={handleChange}
                          type="text"
                          required
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-600">Loan Amount</label>
                        <input
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          type="number"
                          required
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-600">
                          Interest Rate (%)
                        </label>
                        <input
                          name="interest_rate"
                          value={formData.interest_rate}
                          onChange={handleChange}
                          type="number"
                          required
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-600">
                          Tenure (Months)
                        </label>
                        <input
                          name="tenure"
                          value={formData.tenure}
                          onChange={handleChange}
                          type="number"
                          required
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col md:col-span-2">
                        <label className="text-gray-600">Purpose</label>
                        <input
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleChange}
                          type="text"
                          required
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="mt-4 bg-[#8DCFAB] text-white px-6 py-2 rounded-lg hover:bg-[#7ac59f] transition"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Step 2: Collateral */}
                {currentStep === 1 && (
                  <div>
                    <h5 className="font-semibold mb-4">Collateral</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-gray-600">
                          Collateral Details
                        </label>
                        <input
                          name="collateral"
                          value={formData.collateral}
                          onChange={handleChange}
                          type="text"
                          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="bg-gray-300 text-[#263238] px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#67C090] text-white px-6 py-2 rounded-lg hover:bg-[#4d9b72] transition"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Income Proof */}
                {currentStep === 2 && (
                  <div>
                    <h5 className="font-semibold mb-4">Income Proof</h5>
                    <div className="flex flex-col">
                      <label className="text-gray-600">Upload Documents</label>
                      <input
                        type="file"
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="bg-gray-300 text-[#263238] px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#67C090] text-white px-6 py-2 rounded-lg hover:bg-[#4d9b72] transition"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
