import React, { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "Is FlexPay safe?",
            answer: "Yes, all users are KYC verified and transactions are secured with blockchain-powered smart contracts. We use bank-level encryption and follow strict security protocols to protect your data and funds."
        },
        {
            question: "What returns can lenders expect?",
            answer: "Depending on the borrower's risk profile, lenders can earn 12-18% annually. Our smart matching algorithm ensures optimal returns while maintaining risk diversification."
        },
        {
            question: "How fast can I get a loan?",
            answer: "Approved borrowers can get matched and receive funds within 24-48 hours. Our automated approval process and instant matching system make loan disbursement faster than traditional banks."
        },
        {
            question: "Do you follow RBI guidelines?",
            answer: "Yes, FlexPay operates in compliance with RBI norms for P2P lending platforms. We are fully licensed and regulated, ensuring all transactions meet regulatory standards."
        },
        {
            question: "What is the minimum investment amount?",
            answer: "Lenders can start with as little as ₹1,000. Our platform allows you to diversify your investment across multiple borrowers to minimize risk."
        },
        {
            question: "How does the escrow system work?",
            answer: "All funds are held in secure escrow accounts until loan conditions are met. This ensures both borrowers and lenders are protected throughout the transaction process."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-green-500">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our P2P lending platform
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <svg 
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Our support team is here to help you 24/7
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:support@flexpay.com"
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Support
                            </a>
                            <a 
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FAQ