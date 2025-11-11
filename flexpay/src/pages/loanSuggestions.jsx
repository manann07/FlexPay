import React, { useEffect, useState } from "react";
import TopBar from "../componet/topbar";
import Dashboard from "../componet/dashboard";
import Card from "../componet/Card";

export default function LoanSuggestions() {
  // 🔹 Hardcoded sample loan stays same
  const hardcodedLoans = [
    {
      id: "EDU-84321",
      title: "Educational Loan for Master's Degree",
      desc: "Funds required for pursuing an MSc in Data Science from a reputed university. Strong academic background and a co-signer available.",
      rate: "15%",
      risk: "Medium",
      funded: 12500,
      total: 30000,
    },
  ];

  // 🔹 Backend fetched loans
  const [backendLoans, setBackendLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loan-suggestions`);
        if (res.ok) {
          const data = await res.json();
          // convert backend structure → UI-compatible format
          const formatted = data.map((loan) => ({
            id: `REQ-${loan.id}`,
            title: loan.purpose || "Personal Loan Request",
            desc: `Borrower: ${loan.borrower_name} | Amount: ₹${loan.amount}`,
            rate: `${loan.interest_rate}%`,
            risk: "Medium", // temporary placeholder (future: calculate based on credit)
            funded: 0,
            total: loan.amount,
          }));
          setBackendLoans(formatted);
        } else {
          console.error("Failed to fetch loan suggestions");
        }
      } catch (err) {
        console.error("Error fetching loans:", err);
      }
    };

    fetchLoans();
  }, []);

  // 🔹 Merge both: hardcoded (static) + backend (live)
  const allLoans = [...hardcodedLoans, ...backendLoans];

  const getRiskClass = (risk) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#8DCFAB] text-[#263238] font-sans">
      {/* Sidebar */}
      <Dashboard />

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Optional Top Bar */}
        {/* <TopBar currentPage="Loan Suggestions" userInitial="L" /> */}

        {/* Main Content */}
        <div className="ml-63 pt-20 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Loan Cards */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>

            {allLoans.length === 0 ? (
              <p>No loan suggestions available.</p>
            ) : (
              allLoans.map((loan, index) => (
                <Card
                  key={index}
                  title={loan.title}
                  riskLevel={loan.risk}
                  riskClass={getRiskClass(loan.risk)}
                  description={loan.desc}
                  interestRate={loan.rate}
                  funded={loan.funded}
                  total={loan.total}
                />
              ))
            )}
          </div>

          {/* Wallet Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 bg-white/60 border border-[#67C090]/40 rounded-xl p-6 shadow-md">
              <h5 className="text-lg font-bold mb-4">Lender Wallet</h5>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Available Balance</p>
                <p className="text-2xl font-bold text-[#67C090]">₹0.00</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500">Total Invested</p>
                <p className="text-xl font-bold">₹1,50,000</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Projected Annual Return</p>
                <p className="text-xl font-bold">16.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
