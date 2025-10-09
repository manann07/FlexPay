import React from "react";
import TopBar from "../componet/topbar";
import Dashboard from "../componet/dashboard";

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
    },
    {
      id: "BIZ-55902",
      title: "Small Business Expansion",
      desc: "Looking to purchase new equipment for my successful cafe to increase production capacity. Business has been profitable for 3 years.",
      rate: "22%",
      risk: "High",
      funded: 45000,
      total: 75000,
    },
    {
      id: "HML-10457",
      title: "Home Renovation Loan",
      desc: "Need funds for urgent home repairs and renovation. Stable government job with 10+ years of service. Excellent credit history.",
      rate: "11.5%",
      risk: "Low",
      funded: 50000,
      total: 50000,
    },
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

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <TopBar currentPage="Investment Opportunities" userInitial="G" />

        {/* Main Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Loan Cards */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>

            {loans.map((loan) => {
              const progress = (loan.funded / loan.total) * 100;
              const fullyFunded = progress >= 100;

              return (
                <div
                  key={loan.id}
                  className="bg-white border border-[#67C090]/40 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h5 className="text-lg font-semibold">{loan.title}</h5>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskClass(
                            loan.risk
                          )}`}
                        >
                          {loan.risk} Risk
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Loan ID: {loan.id}</p>
                      <p className="mt-2 text-sm">{loan.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Interest Rate (p.a.)</p>
                      <p className="text-3xl font-bold text-[#67C090]">{loan.rate}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>
                        ₹{loan.funded.toLocaleString()} / ₹
                        {loan.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-[#67C090] h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end items-center gap-2">
                    {!fullyFunded ? (
                      <>
                        <input
                          type="number"
                          placeholder="Amount"
                          className="border border-gray-300 rounded px-3 py-1 text-sm w-28"
                        />
                        <button className="bg-[#67C090] text-white px-4 py-2 rounded-lg hover:bg-[#559f77] transition">
                          Invest
                        </button>
                      </>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                      >
                        Fully Funded
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
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
