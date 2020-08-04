import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Main from "./pages/Main";



import Login from "./pages/Login";
import Services from "./pages/Services";
import Member from "./pages/Member"
import Cart from "./pages/Cart"


function App() {
  return (
    <Router>
      <div>
        
        
          <Route exact path="/" component={Main} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/Cart" component={Cart} />
       
        
        


      </div>


    </Router>

  );
}

export default App;
