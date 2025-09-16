import flexpaylogo from '../assets/flexpaylogo.png'
import '../componet/navbar.css'
const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <img src={flexpaylogo} alt="flexpaylogo" class=" logo me-2"/>
    <a class="navbar-brand" href="#">FlexPay</a>
    <div class="ms-auto">
      <a href="login.html" class="btn btn-light me-2">Login</a>
      <a href="registration.html" class="btn btn-primary">Register</a>
    </div>
  </div>
</nav>
    )
}
export default Navbar

