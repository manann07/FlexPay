import React, { useState } from "react";
import Dashboard from "../componet/dashboard";
import TopBar from "../componet/topbar";

export default function KycRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    maritalStatus: "",
    district: "",
    city: "",
    street: "",
    pan: null,
    aadhaar: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const stepTitles = [
    "Step 1: Personal Details",
    "Step 2: Address Details",
    "Step 3: Document Upload",
  ];

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.firstName || !formData.lastName || !formData.dob || !formData.maritalStatus) {
        alert("Please fill in all required personal details.");
        return false;
      }
    }
    if (currentStep === 1) {
      if (!formData.district || !formData.city || !formData.street) {
        alert("Please complete all required address fields.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.pan || !formData.aadhaar) {
        alert("Please upload both PAN and Aadhaar documents.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
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
    if (validateStep()) {
      setSubmitted(true);
    }
  };

  const progress = ((currentStep + 1) / stepTitles.length) * 100;

  return (
    <div className="flex min-h-screen  bg-[#8DCFAB] text-[#263238]">
      {/* Sidebar */}
      <Dashboard />

      {/* Right Section */}
      <div className="flex flex-col flex-1 ">
        {/* Topbar */}
        <TopBar currentPage="KYC Registration" userInitial="G" />

        <main className="p-6 pt-20">
          {submitted ? (
            <div className="text-center border border-[#67C090]/40 bg-[#67C090]/10 p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4 text-[#67C090]">✓</div>
              <h2 className="text-2xl font-bold">Submission Successful!</h2>
              <p className="text-gray-600 mt-2">
                Your KYC details are submitted for verification. We’ll notify you
                once the process is complete.
              </p>
              <button
                className="mt-4 bg-[#67C090] text-white px-5 py-2 rounded-lg hover:bg-[#559f77] transition"
                onClick={() => window.location.reload()}
              >
                Back to Dashboard
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-[#67C090]/40 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between mb-3">
                <p className="font-semibold">{stepTitles[currentStep]}</p>
                <p className="text-sm text-gray-600">
                  {Math.round(progress)}% Complete
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                <div
                  className="bg-[#67C090] h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Step Content */}
              {currentStep === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Middle Name</label>
                    <input
                      type="text"
                      value={formData.middleName}
                      onChange={(e) =>
                        setFormData({ ...formData, middleName: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Date of Birth *</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Marital Status *</label>
                    <select
                      value={formData.maritalStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, maritalStatus: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    >
                      <option value="">Select...</option>
                      <option>Single</option>
                      <option>Married</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">District *</label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({ ...formData, district: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">
                      City / Municipality *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-sm text-gray-600">Street / Tole *</label>
                    <input
                      type="text"
                      value={formData.street}
                      onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">PAN Card *</label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setFormData({ ...formData, pan: e.target.files[0] })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Aadhaar Card *</label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setFormData({ ...formData, aadhaar: e.target.files[0] })
                      }
                      className="border rounded px-3 py-2 focus:outline-none focus:border-[#67C090]"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-gray-300 text-[#263238] px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Back
                  </button>
                )}
                {currentStep < stepTitles.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#67C090] text-white px-4 py-2 rounded-lg hover:bg-[#559f77] transition ml-auto"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#67C090] text-white px-4 py-2 rounded-lg hover:bg-[#559f77] transition ml-auto"
                  >
                    Submit for Verification
                  </button>
                )}
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
