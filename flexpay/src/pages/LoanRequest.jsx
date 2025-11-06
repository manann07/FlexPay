import React, { useState } from "react";
import Dashboard from "../componet/dashboard";
import TopBar from "../componet/topbar";

export default function LoanRequest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Loan Details", "Collateral", "Income Proof"];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen bg-[#8DCFAB] text-[#263238]">
      {/* Sidebar */}
      <Dashboard />

      {/* Right Side */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <TopBar currentPage="Loan Request" userInitial="G" />

        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Loan Request</h2>

          {/* Form Card */}
          <div className="bg-white/60 backdrop-blur-md border border-[#67C090]/40 rounded-2xl shadow-lg p-6">

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                <div
                className="h-2 rounded-full bg-[#67C090] transition-all duration-500"
                 style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* loan details  */}
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
                  }}
                  className="mt-4 bg-[#8DCFAB] text-white px-6 py-2 rounded-lg hover:bg-[#8DCFAB] transition"
                >
                  New Loan Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {currentStep === 0 && (
                  <div>
                    <h5 className="font-semibold mb-4">Loan Details</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">
                          Loan Amount
                        </label>
                        <input
                          type="number"
                          required
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">
                          Interest Rate (%)
                        </label>
                        <input
                          type="number"
                          required
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">
                          Tenure (Months)
                        </label>
                        <input
                          type="number"
                          required
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">Purpose</label>
                        <input
                          type="text"
                          required
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="mt-4 bg-[#8DCFAB] text-white px-6 py-2 rounded-lg hover:bg-[#8DCFAB] transition"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {currentStep === 1 && (
                  <div>
                    <h5 className="font-semibold mb-4">Collateral</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">
                          Collateral Available?
                        </label>
                        <select
                          required
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
                        >
                          <option value="">Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-dark text-gray-600">
                          Collateral Details
                        </label>
                        <input
                          type="text"
                          className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
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

                {/* Step 3 */}
                {currentStep === 2 && (
                  <div>
                    <h5 className="font-semibold mb-4">Income Proof</h5>
                    <div className="flex flex-col">
                      <label className="text-dark text-gray-600">
                        Upload Documents
                      </label>
                      <input
                        type="file"
                        required
                        className="border border-[#67C090] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#67C090]"
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
