import React, { useState } from "react";
import { Home, Wallet, FileText, CheckSquare } from "lucide-react"; // icons

export default function Dashboard() {
  const [userType, setUserType] = useState("lender");

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
    <div className="flex min-h-screen bg-white ">
        
      {/* Sidebar */}
      <aside className="w-64 bg-[#67C090] p-6 text-white">
        <h2 className="text-xl font-bold mb-6">FlexPay</h2>
        <nav className="space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg  transition"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
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
