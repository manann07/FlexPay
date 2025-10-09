import React from "react";

export default function TopBar({ currentPage = "Dashboard", userInitial = "G" }) {
  return (
    <div className="fixed w-full flex items-center justify-between px-2 py-2 border-b border-gray-200 bg-white/80 backdrop-blur-md z-20">
      {/* Breadcrumb */}
      <nav className="text-sm mt-4 ">
        <ol className="flex space-x-3 text-gray-500">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-[#263238] font-medium hover:underline">{currentPage}</li>
        </ol>
      </nav>

      {/* User Circle */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#263238] text-white font-bold">
        {userInitial}
      </div>
    </div>
  );
}
