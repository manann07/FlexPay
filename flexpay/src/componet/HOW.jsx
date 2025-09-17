import '../componet/HOW.css'

const HOW = () => {
    return(
        <section className="section">
            <div className="container steps-section p-5">
              <div className="text-center mb-5">
              <h2 className="fw-bold">How FlexPay Works</h2>
              <p className="text-muted">Start your journey in just 3 easy steps</p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="step-card">
                  <h4>1. Create Account</h4>
                  <p>Sign up as borrower or lender & complete KYC verification.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step-card">
                  <h4>2. Apply / Invest</h4>
                  <p>Borrowers request loans, lenders choose borrowers to invest in.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step-card">
                  <h4>3. Earn / Repay</h4>
                  <p>Smart contracts ensure timely repayments & returns directly to wallets.</p>
                </div>
              </div>
            </div>
            </div>
        </section>
    )
}
 export default HOW
