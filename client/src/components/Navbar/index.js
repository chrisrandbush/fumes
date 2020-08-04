import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse" id="navbar10">
        <ul className="navbar-nav nav-fill w-100">
        <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link text-white"
                }
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/#mainInfo"
                className={
                  window.location.pathname === "/#mainInfo" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link text-white"
                }
              >
                Info
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/member"
                className={window.location.pathname === "/member" ? "nav-link active" : "nav-link text-white"}
              >
                Member
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={window.location.pathname === "/services" ? "nav-link active" : "nav-link text-white"}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className={window.location.pathname === "/register" ? "nav-link active" : "nav-link text-black"}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
              >
               <i className="fa fa-cart-arrow-down" aria-hidden="true" />

              </Link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
  );
}

export default Navbar;
