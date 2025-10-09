import React, { useState } from "react";
import { Home, Wallet, FileText, CheckSquare } from "lucide-react"; // icons

export default function Dashboard() {
  // You can set this from props or global state (e.g. Zustand/Context/Auth)
  const [userType, setUserType] = useState("borrower"); 
  // change to "lender" to test lender dashboard

  const lenderNav = [
    { name: "Loan Suggestions", icon: FileText, href: "/loan-suggestions" },
    { name: "My Lendings", icon: CheckSquare, href: "/my-lendings" },
    { name: "Wallet", icon: Wallet, href: "/wallet" },
  ];

  const borrowerNav = [
    { name: "KYC Registration", icon: FileText, href: "/kyc" },
    { name: "Loan Request", icon: CheckSquare, href: "/loan-request" },
    { name: "Wallet", icon: Wallet, href: "/wallet" },
  ];

  const navigation = userType === "lender" ? lenderNav : borrowerNav;

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 p-6">
        <h2 className="text-xl font-bold text-cyan-400 mb-6">FlexPay</h2>
        <nav className="space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        {/* Switch userType (for demo only) */}
        <div className="mt-10">
          <p className="text-sm text-slate-400 mb-2">Switch Role:</p>
          <button
            onClick={() => setUserType("borrower")}
            className="mr-2 bg-cyan-500 px-3 py-1 rounded"
          >
            Borrower
          </button>
          <button
            onClick={() => setUserType("lender")}
            className="bg-indigo-500 px-3 py-1 rounded"
          >
            Lender
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">
          {userType === "lender" ? "Lender Dashboard" : "Borrower Dashboard"}
        </h1>
        <div className="glass-card bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <p>
            Welcome to your {userType === "lender" ? "Lender" : "Borrower"} dashboard.
            Select an option from the sidebar.
          </p>
        </div>
      </main>
    </div>
  );
}
