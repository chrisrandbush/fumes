import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function cartBtn() {
  return (
<div className="button_cont" align="center">
    <a>
    
    <Link
    to="/cart"
    className={window.location.pathname === "/Member" ?  "goToCart" : "example_c"}  
    rel="nofollow noopener"
    >
        Go to Checkout
    </Link>
        </a>
    </div>

              
            
            
       
  
  );
}

export default cartBtn;
