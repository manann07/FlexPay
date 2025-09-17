import React from "react";
import { Link } from "react-router-dom";

import flexpaylogo from '../assets/flexpaylogo.png'
import '../componet/navbar.css'
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <img src={flexpaylogo} alt="flexpaylogo" className=" logo me-2"/>
    <a className="navbar-brand" href="#">FlexPay</a>
    <div className="ms-auto">
      <Link to="/login" className="btn btn-light me-2">Login</Link>
      <Link to="/register" className="btn btn-primary me-2">Register</Link>
    </div>
  </div>
</nav>
    )
}
export default Navbar

