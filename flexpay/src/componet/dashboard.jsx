import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Wallet, FileText, CheckSquare } from "lucide-react"; // icons
import LOGO01 from '../assets/LOGO01.png'

// TopBar removed (unused) - import kept commented out until implemented
// import TopBar from "./topbar";

export default function Dashboard() {
  const [userType, setUserType] = useState("borrower"); // usertype = "lender" or "borrower"

  const lenderNav = [
    { name: "Loan Suggestions", icon: FileText, href: "/LoanSuggestions" },
    { name: "My Lending", icon: CheckSquare, href: "/myLending" },
    { name: "Wallet", icon: Wallet, href: "/Wallet" },
  ];

  const borrowerNav = [
    { name: "KYC Registration", icon: FileText, href: "/Kyc" },
    { name: "Loan Request", icon: CheckSquare, href: "/Loan-request" },
    { name: "Wallet", icon: Wallet, href: "/Wallet" },
  ];

  const navigation = userType === "lender" ? lenderNav : borrowerNav;

  return (
    <div className=" flex justify-start flex min-h-screen bg-white/80 backdrop-blur-md">
      {/* topbar */}
      {/* <TopBar currentPage="My Lendings" userInitial="G" /> */}
      
      {/* Sidebar */}
      <aside className="w-64 p-6 text-white ">
        {/* Logo */}
          <div className="flex items-center space-x-3 px-3 py-2 ">
            <img src={LOGO01} alt="FlexPay Logo" className="h-6 w-10" />
            <span className="text-2xl font-bold text-gray-600 tracking-tight">
              <span className=" mb-6 text-[#67C090 ]">FLEX</span>PAY</span>
          </div>

          {/* User type toggle - uses setUserType to avoid unused variable lint error */}
          <div className="mt-4 px-3">
            <div className="text-sm font-medium text-gray-700 mb-2">View as</div>
            <div className="flex gap-2">
              <button
                onClick={() => setUserType("borrower")}
                className={`px-3 py-1 rounded-md ${userType === "borrower" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                Borrower
              </button>
              <button
                onClick={() => setUserType("lender")}
                className={`px-3 py-1 rounded-md ${userType === "lender" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                Lender
              </button>
            </div>
          </div>
          {/* main  */}
        <nav className="space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg  transition"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
      
      {/* Main content */}
      {/* <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">
          {userType === "lender" ? "Lender Dashboard" : "Borrower Dashboard"}
        </h1>
        <div className="bg-[#67C090]/10 border border-[#67C090] rounded-xl p-6">
          <p>
            Welcome to your {userType === "lender" ? "Lender" : "Borrower"} dashboard.
            Select an option from the sidebar.
          </p>
        </div>
      </main> */}
      
    </div>
    
  );
}
