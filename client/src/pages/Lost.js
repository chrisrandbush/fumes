import React from 'react';
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";
import { useHistory, Link } from "react-router-dom";



function Lost () {
    return (
      <>
      

<div className="memberBody">

<NavWhite />
<div className="container" id="lost">
  <div className="gif"><img src="https://media.giphy.com/media/tvGOBZKNEX0ac/giphy.gif" alt="lost" /></div>
  <h1>404 Page Not Found</h1>
  <h3>Uh Oh! You seem lost...Click below to return to the main menu.</h3>
  <Link
              to="/"
              className={window.location.pathname === "/main" ? "nav-link active" : "nav-link text-dark"}
            >
              <button 
            
              className="btn btn-success" 
              
              
              
            
                  >Home</button> 
                  </Link>
</div>

      </div>
<Footer />
</>

    )
}
export default Lost;
