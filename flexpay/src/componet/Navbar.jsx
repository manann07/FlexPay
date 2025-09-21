import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO01 from '../assets/LOGO01.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img src={LOGO01} alt="FlexPay Logo" className="h-8 w-10" />
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">
                            <span className="text-green-500">FLEX</span>PAY
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
                        </NavLink>
                        <NavLink
                            to="/why-us"
                            className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 relative group"
                        >
                            Why Us?
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
                        </NavLink>
                        <NavLink
                            to="/How-it-works"
                            className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 relative group"
                        >
                            How It Works
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
                        </NavLink>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <NavLink
                            to="/login"
                            className="px-6 py-2 text-gray-700 font-medium hover:text-green-500 transition-colors duration-200"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            Get Started
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-green-500 focus:outline-none focus:text-green-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                            <NavLink
                                to="/"
                                className="block px-3 py-2 text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/why-us"
                                className="block px-3 py-2 text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Why Us?
                            </NavLink>
                            <NavLink
                                to="/How-it-works"
                                className="block px-3 py-2 text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </NavLink>
                            <div className="pt-4 space-y-2">
                                <NavLink
                                    to="/login"
                                    className="block px-3 py-2 text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="block px-3 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 mx-3 text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar

