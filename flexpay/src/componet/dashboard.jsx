import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wallet, FileText, CheckSquare } from "lucide-react"; // icons
import LOGO01 from '../assets/LOGO01.png';
import TopBar from "./topbar";

export default function Dashboard() {
  const [userType, setUserType] = useState(null); // initially null until loaded
  const location = useLocation();

  // ✅ Load user role from localStorage when component mounts ****new
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserType(parsedUser.role); // "lender" or "borrower"
    } else {
      // fallback: if no userData found, default to borrower or redirect
      console.warn("No user data found in localStorage");
      setUserType("borrower");
    }
  }, []);

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

  // Find the current page name based on the current path
  const currentPage =
    navigation.find((item) => item.href === location.pathname)?.name || "...";

  if (!userType) {
    // show loader until userType is loaded ****new
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div>
      {/* topbar */}
      <TopBar
        currentPage={currentPage}
        userInitial={userType ? userType[0].toUpperCase() : "U"}
      />

      <div className="fixed flex justify-start flex min-h-screen bg-white/80 backdrop-blur-md">
        {/* Sidebar */}
        <aside className="w-64 p-6 text-white ">
          {/* Logo */}
          <div className="flex items-center space-x-3 px-3 py-2 ">
            <img src={LOGO01} alt="FlexPay Logo" className="h-6 w-10" />
            <span className="text-2xl font-bold text-gray-600 tracking-tight">
              <span className=" mb-6 text-[#67C090 ]">FLEX</span>PAY
            </span>
          </div>

          {/* User type toggle - uses setUserType to avoid unused variable lint error */}
          <div className="mt-4 px-3">
            <div className="text-sm font-medium text-gray-700 mb-2">View as</div>
            <div className="flex gap-2">
              <button
                onClick={() => setUserType("borrower")}
                className={`px-3 py-1 rounded-md ${
                  userType === "borrower"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Borrower
              </button>
              <button
                onClick={() => setUserType("lender")}
                className={`px-3 py-1 rounded-md ${
                  userType === "lender"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Lender
              </button>
            </div>
          </div>

          {/* main  Navigation */}
          <nav className="space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  location.pathname === item.href
                    ? "bg-indigo-100 text-green-800"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-500"
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Logout button *****new */}
          <div className="mt-6 px-3">
            <button
              onClick={() => {
                localStorage.removeItem("userData");
                window.location.href = "/login";
              }}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
