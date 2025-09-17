import '../componet/FOOTER.css'
const FOOTER =() =>{
    return(
        <footer className=" slide-in-left">
  <div className="container footer ">
    <div className="row g-4">
      {/* <!-- About --> */}
      <div className="col-md-4">
        <h5 className="footer-title">FlexPay</h5>
        <p>FlexPay is a P2P lending platform empowering individuals to borrow at lower rates and lend at higher returns. Secure. Transparent. Instant.</p>
      </div>
      
      {/* <!-- Quick Links --> */}
      <div className="col-md-2">
        <h6 className="footer-subtitle">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="#why">Why FlexPay</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="registration.html">Register</a></li>
        </ul>
      </div>

      {/* <!-- Contact --> */}
      <div className="col-md-3">
        <h6 className="footer-subtitle">Contact</h6>
        <ul className="list-unstyled">
          <li><i className="bi bi-envelope-fill me-2"></i> support@flexpay.com</li>
          <li><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</li>
          <li><i className="bi bi-geo-alt-fill me-2"></i> MANIT, Bhopal, India</li>
        </ul>
      </div>

      {/* <!-- Socials -->// */}
      <div className="col-md-3">
        <h6 className="footer-subtitle">Follow Us</h6>
        <div className="social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>

    {/* <hr className="footer-divider"> */}

    <div className="text-center mt-3">
      <p className="mb-0">© 2025 FlexPay | Built at MANIT Bhopal | All Rights Reserved</p>
    </div>
  </div>
</footer>
    )
}
export default FOOTER