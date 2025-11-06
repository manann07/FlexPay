import React from "react";
import TopBar from "../componet/topbar";
import Dashboard from "../componet/dashboard";
import Card from "../componet/Card";

export default function LoanSuggestions() {
  const loans = [
    {
      id: "EDU-84321",
      title: "Educational Loan for Master's Degree",
      desc: "Funds required for pursuing an MSc in Data Science from a reputed university. Strong academic background and a co-signer available.",
      rate: "15%",
      risk: "Medium",
      funded: 12500,
      total: 30000,
    }
    // ,
    // {
    //   id: "BIZ-55902",
    //   title: "Small Business Expansion",
    //   desc: "Looking to purchase new equipment for my successful cafe to increase production capacity. Business has been profitable for 3 years.",
    //   rate: "22%",
    //   risk: "High",
    //   funded: 45000,
    //   total: 75000,
    // },
    // {
    //   id: "HML-10457",
    //   title: "Home Renovation Loan",
    //   desc: "Need funds for urgent home repairs and renovation. Stable government job with 10+ years of service. Excellent credit history.",
    //   rate: "11.5%",
    //   risk: "Low",
    //   funded: 50000,
    //   total: 50000,
    // },
  ];

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
        {/* Top Navbar */}
        <TopBar currentPage="Investment Opportunities" userInitial="G" />

        {/* Main Content */}
        <div className=" pt-20 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Loan Cards */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>

            {loans.map((loan) => (
              <Card title={loan.title} 
              riskLevel={loan.risk} 
              riskClass={getRiskClass(loan.risk)} 
              description={loan.desc} 
              interestRate={loan.rate} 
              funded={loan.funded} 
              total={loan.total} />
            ))}
          </div>

          {/* Wallet Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 bg-white border border-[#67C090]/40 rounded-xl p-6 shadow-md">
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
