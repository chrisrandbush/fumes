import React from "react";
import "./style.css";

function Footer() {
  return (
   <footer className="section footer-classic context-dark">
  <div className="container">
    <div className="row row-30">
      <div className="col-md-4 col-xl-5">
        <div className="pr-xl-4"><a className="brand" href="index.html"></a>
          <h3>FUMES</h3>
          <p>Take the hastle out of car care. Join us today!</p>
          <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2020</span><span>&nbsp;</span><span>Fumes</span><span>.&nbsp;</span><span>All Rights Reserved.</span></p>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Contacts</h5>
        <dl className="contact-list">
          <dt>Address:</dt>
          <dd>123 Main Street, Cleveland, OH</dd>
        </dl>
        <dl className="contact-list">
          <dt>email:</dt>
          <dd><a href="mailto:#">FumesApp@gmail.com</a></dd>
        </dl>
        <dl className="contact-list">
          <dt>phones:</dt>
          <dd><a href="tel:#">+1 330-867-5309</a>
          </dd>
        </dl>
      </div>
      <div className="col-md-4 col-xl-3">
        <h5>Links</h5>
        <ul className="nav-list">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


  );
}

export default Footer;
