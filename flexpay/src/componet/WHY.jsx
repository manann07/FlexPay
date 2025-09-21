import React, { useState } from 'react'

const WHY = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const cards = [
        {
            title: "Higher",
            highlight: "Returns",
            desc: "Earn up to 18% annual returns on your investments, significantly higher than traditional savings accounts.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Lower",
            highlight: "Interest Rates",
            desc: "Borrowers get loans at competitive rates starting from 12% APR, much lower than traditional banks.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            )
        },
        {
            title: "Secure",
            highlight: "Escrow",
            desc: "All transactions are protected by integrated escrow system ensuring 100% security for both parties.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ]

    return (
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-green-500">FlexPay</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        We are a modern peer-to-peer lending platform you can trust with your money. 
                        Our integrated escrow protection ensures every transaction is safe, transparent, 
                        and hassle-free. Lenders earn higher returns & borrowers get loans at more 
                        affordable interest rates.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer border border-transparent hover:border-green-200 flex flex-col items-center text-center relative transform hover:-translate-y-2`}
                        >
                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className="bg-gradient-to-r from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                                    {card.icon}
                                </div>
                                {/* Background circles */}
                                <div className={`absolute top-0 left-0 w-full h-full rounded-full border-2 border-green-200 transition-all duration-300 ${
                                    activeIndex === index ? 'animate-ping' : ''
                                }`}></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {card.title}{' '}
                                <span className="text-green-500">{card.highlight}</span>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="mt-12 flex justify-center gap-3">
                    {cards.map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                activeIndex === index
                                    ? 'bg-green-500 scale-125'
                                    : 'bg-green-200'
                            }`}
                        ></div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">99.9%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                            <div className="text-sm text-gray-600">Customer Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">₹50Cr+</div>
                            <div className="text-sm text-gray-600">Loans Disbursed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">10K+</div>
                            <div className="text-sm text-gray-600">Happy Users</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WHY