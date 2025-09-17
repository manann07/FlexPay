import '../componet/FAQ.css'

const FAQ = () =>{
    return(
        <section className="section">
        <div className="container">
            <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            </div>
            <div className="faq-card">
            <h5>Is FlexPay safe?</h5>
            <p>Yes, all users are KYC verified and transactions are secured with blockchain-powered smart contracts.</p>
            </div>
            <div className="faq-card">
            <h5>What returns can lenders expect?</h5>
            <p>Depending on the borrower’s risk profile, lenders can earn 12-18% annually.</p>
            </div>
            <div className="faq-card">
            <h5>How fast can I get a loan?</h5>
            <p>Approved borrowers can get matched and receive funds within 24-48 hours.</p>
            </div>
            <div className="faq-card">
            <h5>Do you follow RBI guidelines?</h5>
            <p>Yes, FlexPay operates in compliance with RBI norms for P2P lending platforms.</p>
            </div>
        </div>
        </section>
    )
}
export default FAQ