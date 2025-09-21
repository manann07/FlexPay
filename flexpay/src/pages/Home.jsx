import pana from '../assets/pana.png'
import { Link } from 'react-router-dom'
import Features from '../componet/Features'
import WHY from '../componet/WHY'
import HOW from '../componet/HOW'
import FOOTER from '../componet/FOOTER'

const Home = () =>{
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-green-700">Trusted by 10,000+ users</span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    A <span className="text-green-500">P2P</span> Lending<br />
                                    platform making<br />
                                    <span className="text-gray-700">lending & borrowing</span><br />
                                    <span className="text-green-500">easy & secure</span>
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Connect borrowers with lenders directly. Get competitive rates, 
                                    fast approvals, and secure transactions all in one platform.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/register"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Get Started
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <Link 
                                    to="/How-it-works"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-500 transition-colors duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">₹50Cr+</div>
                                    <div className="text-sm text-gray-600">Loans Disbursed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">10K+</div>
                                    <div className="text-sm text-gray-600">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">99.9%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src={pana}
                                    alt="P2P Lending Illustration"
                                    className="w-full h-auto max-w-lg mx-auto"
                                />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute top-10 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Instant Approval</div>
                                        <div className="text-xs text-gray-600">Get approved in minutes</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-10 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Secure Platform</div>
                                        <div className="text-xs text-gray-600">Bank-level security</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
                </div>
            </section>

            {/* Features Section */}
            <Features />

            {/* Why Choose Us Section */}
            <WHY />

            {/* How It Works Section */}
            <HOW />

            {/* Footer */}
            <FOOTER />
        </div>
    )
}
export default Home