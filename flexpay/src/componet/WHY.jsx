import '../componet/WHY.css'

const WHY =() =>{
    return(
       <section class="section why-section text-center">
  <div class="container">
    <h2 class="fw-bold mb-5">Why Choose FlexPay?</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="feature-card">
          <i class="bi bi-shield-lock"></i>
          <h4>Safe & Secure</h4>
          <p>KYC verified users, smart contracts, and encrypted transactions ensure safety.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="feature-card">
          <i class="bi bi-graph-up"></i>
          <h4>High Returns</h4>
          <p>Lenders earn attractive returns, much higher than traditional savings.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="feature-card">
          <i class="bi bi-cash-coin"></i>
          <h4>Low Interest Loans</h4>
          <p>Borrowers get instant loans at affordable interest rates with no middlemen.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default WHY