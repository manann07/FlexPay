import React from "react";
import Dashboard from "../componet/dashboard";

export default function MyLending() {
  const investments = [
    {
      id: "EDU-84321",
      amount: "₹12,500",
      rate: "15.0%",
      earned: "₹980.20",
      remaining: "₹11,940",
      next: "05 Oct 2025",
      status: "Active",
    },
    {
      id: "BIZ-55902",
      amount: "₹45,000",
      rate: "22.0%",
      earned: "₹3,105.50",
      remaining: "₹43,150",
      next: "01 Oct 2025",
      status: "Active",
    },
    {
      id: "HML-10457",
      amount: "₹50,000",
      rate: "11.5%",
      earned: "₹8,364.30",
      remaining: "₹0.00",
      next: "-",
      status: "Paid Off",
    },
    {
      id: "CAR-30991",
      amount: "₹30,000",
      rate: "14.0%",
      earned: "₹0.00",
      remaining: "₹30,000",
      next: "-",
      status: "Defaulted",
    },
    {
      id: "PER-67823",
      amount: "₹12,500",
      rate: "18.0%",
      earned: "₹1,250.00",
      remaining: "₹11,750",
      next: "10 Oct 2025",
      status: "Active",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100/30 text-green-600";
      case "Paid Off":
        return "bg-blue-100/30 text-blue-600";
      case "Defaulted":
        return "bg-red-100/30 text-red-600";
      default:
        return "bg-gray-100/30 text-gray-600";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#8DCFAB] text-[#263238] font-sans">
        {/* sidebar  */}
        <Dashboard/>
    

      {/* Main Content */}
      <div className="flex-1">

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">My Lending Portfolio</h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
            <div className="bg-white/40 backdrop-blur-md border border-[#67C090]/40 rounded-xl p-5 shadow-md">
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-2xl font-bold">₹1,50,000</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-[#67C090]/40 rounded-xl p-5 shadow-md">
              <p className="text-sm text-gray-600">Total Interest Earned</p>
              <p className="text-2xl font-bold text-[#67C090]">₹12,450</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-[#67C090]/40 rounded-xl p-5 shadow-md">
              <p className="text-sm text-gray-600">Projected Annual Return</p>
              <p className="text-2xl font-bold text-blue-500">16.8%</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-[#67C090]/40 rounded-xl p-5 shadow-md">
              <p className="text-sm text-gray-600">Portfolio Health</p>
              <p className="text-2xl font-bold">4 Active / 1 Defaulted</p>
            </div>
          </div>

          {/* Investment Table */}
          <div className="bg-white/40 backdrop-blur-md border border-[#67C090]/40 rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold mb-4">Investment Details</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-200/50 text-gray-500">
                    <th className="py-2 px-3">Loan ID</th>
                    <th className="py-2 px-3">Amount Lent</th>
                    <th className="py-2 px-3">Interest Rate</th>
                    <th className="py-2 px-3">Interest Earned</th>
                    <th className="py-2 px-3">Principal Remaining</th>
                    <th className="py-2 px-3">Next Payment</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((inv) => (
                    <tr key={inv.id} className="border-b border-gray-200/40 hover:bg-white/30">
                      <td className="py-2 px-3">{inv.id}</td>
                      <td className="py-2 px-3">{inv.amount}</td>
                      <td className="py-2 px-3">{inv.rate}</td>
                      <td className="py-2 px-3">{inv.earned}</td>
                      <td className="py-2 px-3">{inv.remaining}</td>
                      <td className="py-2 px-3">{inv.next}</td>
                      <td className="py-2 px-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                            inv.status
                          )}`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-2 px-3">
                        <button className="px-3 py-1 text-sm rounded border border-[#67C090] text-[#67C090] hover:bg-[#67C090] hover:text-white transition">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
