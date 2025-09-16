import '../componet/FOOTER.css'
const FOOTER =() =>{
    return(
        <footer class=" slide-in-left">
  <div class="container footer ">
    <div class="row g-4">
      {/* <!-- About --> */}
      <div class="col-md-4">
        <h5 class="footer-title">FlexPay</h5>
        <p>FlexPay is a P2P lending platform empowering individuals to borrow at lower rates and lend at higher returns. Secure. Transparent. Instant.</p>
      </div>
      
      {/* <!-- Quick Links --> */}
      <div class="col-md-2">
        <h6 class="footer-subtitle">Quick Links</h6>
        <ul class="list-unstyled">
          <li><a href="#why">Why FlexPay</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="registration.html">Register</a></li>
        </ul>
      </div>

      {/* <!-- Contact --> */}
      <div class="col-md-3">
        <h6 class="footer-subtitle">Contact</h6>
        <ul class="list-unstyled">
          <li><i class="bi bi-envelope-fill me-2"></i> support@flexpay.com</li>
          <li><i class="bi bi-telephone-fill me-2"></i> +91 98765 43210</li>
          <li><i class="bi bi-geo-alt-fill me-2"></i> MANIT, Bhopal, India</li>
        </ul>
      </div>

      {/* <!-- Socials -->// */}
      <div class="col-md-3">
        <h6 class="footer-subtitle">Follow Us</h6>
        <div class="social-icons">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>

    {/* <hr class="footer-divider"> */}

    <div class="text-center mt-3">
      <p class="mb-0">© 2025 FlexPay | Built at MANIT Bhopal | All Rights Reserved</p>
    </div>
  </div>
</footer>
    )
}
export default FOOTER