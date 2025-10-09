import React from "react";
import { Wallet, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import Dashboard from "../componet/dashboard";

export default function WalletPage() {
  return (
    <div className="flex min-h-screen bg-[#8DCFAB] text-[#263238]">
      {/* Sidebar */}
      <Dashboard/>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
      {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-10">
          <nav className="text-sm">
            <ol className="flex space-x-2 text-gray-500">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="hover:underline text-[#263238]">wallet</li>
            </ol>
          </nav>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#263238] text-white font-bold">
            G
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wallet Card */}
          <div>
            <h2 className="text-2xl font-bold mb-4">My Wallet</h2>
            <div className="bg-white/60 backdrop-blur-md border border-[#67C090]/40 rounded-2xl shadow-lg p-6">
              <p className="text-sm text-[#263238]/70">Available Balance</p>
              <h1 className="text-4xl font-bold mb-4">₹20,625.50</h1>
              <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-lg font-semibold text-white bg-[#67C090] hover:bg-[#56a87b] transition">
                  Add Funds
                </button>
                <button className="px-4 py-2 rounded-lg font-semibold text-white bg-[#263238] hover:bg-[#1b2429] transition">
                  Withdraw Funds
                </button>
              </div>
              <hr className="my-4 border-[#67C090]/40" />
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[#263238]/70">Withdrawable Balance</span>
                <span className="font-semibold">₹15,125.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#263238]/70">Amount on Hold (Investments)</span>
                <span className="font-semibold">₹5,500.00</span>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
            <div className="bg-white/60 backdrop-blur-md border border-[#67C090]/40 rounded-2xl shadow-lg p-6">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h4 className="font-semibold">Recent Transactions</h4>
                <div className="flex gap-2">
                  <select className="border border-[#67C090]/40 rounded-lg px-3 py-2 text-sm">
                    <option>Type (All)</option>
                    <option>Deposit</option>
                    <option>Withdrawal</option>
                    <option>Investment</option>
                    <option>Repayment</option>
                  </select>
                  <input
                    type="date"
                    className="border border-[#67C090]/40 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-sm text-[#263238]/70">
                      <th className="p-2"></th>
                      <th className="p-2">Details</th>
                      <th className="p-2">Transaction ID</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Amount</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#67C090]/30 hover:bg-[#67C090]/10">
                      <td className="p-2">
                        <div className="w-10 h-10 rounded-full bg-[#67C090]/20 flex items-center justify-center">
                          <ArrowDownCircle size={18} className="text-[#67C090]" />
                        </div>
                      </td>
                      <td className="p-2">
                        <b>Interest Received</b>
                        <br />
                        <span className="text-sm text-[#263238]/60">From Loan: BIZ-55902</span>
                      </td>
                      <td className="p-2 text-[#263238]/60">TXN95175346</td>
                      <td className="p-2">16 Sep 2025</td>
                      <td className="p-2 text-green-600 font-semibold">+ ₹1,250.50</td>
                      <td className="p-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Completed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t border-[#67C090]/30 hover:bg-[#67C090]/10">
                      <td className="p-2">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                          <ArrowUpCircle size={18} className="text-red-500" />
                        </div>
                      </td>
                      <td className="p-2">
                        <b>Investment Made</b>
                        <br />
                        <span className="text-sm text-[#263238]/60">In Loan: EDU-84321</span>
                      </td>
                      <td className="p-2 text-[#263238]/60">TXN88521473</td>
                      <td className="p-2">14 Sep 2025</td>
                      <td className="p-2 text-red-600 font-semibold">- ₹10,000.00</td>
                      <td className="p-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Completed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t border-[#67C090]/30 hover:bg-[#67C090]/10">
                      <td className="p-2">
                        <div className="w-10 h-10 rounded-full bg-[#67C090]/20 flex items-center justify-center">
                          <ArrowDownCircle size={18} className="text-[#67C090]" />
                        </div>
                      </td>
                      <td className="p-2">
                        <b>Funds Deposited</b>
                        <br />
                        <span className="text-sm text-[#263238]/60">via UPI</span>
                      </td>
                      <td className="p-2 text-[#263238]/60">TXN12345678</td>
                      <td className="p-2">12 Sep 2025</td>
                      <td className="p-2 text-green-600 font-semibold">+ ₹20,000.00</td>
                      <td className="p-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Completed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t border-[#67C090]/30 hover:bg-[#67C090]/10">
                      <td className="p-2">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                          <ArrowUpCircle size={18} className="text-red-500" />
                        </div>
                      </td>
                      <td className="p-2">
                        <b>Withdrawal</b>
                        <br />
                        <span className="text-sm text-[#263238]/60">To Bank A/C ...xx98</span>
                      </td>
                      <td className="p-2 text-[#263238]/60">TXN84315841</td>
                      <td className="p-2">10 Sep 2025</td>
                      <td className="p-2 text-red-600 font-semibold">- ₹5,000.00</td>
                      <td className="p-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
