import React, { useState } from "react";
import api from "../utils/api";
import { useHistory, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";

function Register() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState([]);
  const [street, setStreet] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [zip, setZip] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);

  let history = useHistory();
  
  const registerSubmit = (e) => {
    e.preventDefault();
    api
      .register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        street: street,
        city: city,
        state: state,
        zip: zip,
        make: make,
        model: model,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/Member");
      });
  };
  return (
    <>
    
    <div className="regisBody">
    <NavWhite />
    <div className="container register">
        
  <div className="row">
  
    <div className="col-md-3 register-left">
    
      <img src="https://i.ibb.co/LNpS6vD/iconfinder-wrench-1608741.png" alt="iconfinder-wrench-1608741" border={0} />
      
      <h3>Welcome</h3>
      
      <p>You are 30 seconds away from requesting service!</p>

      <br />
      <p>Already registered?</p>
      <a>
      <Link
    to="/Login"
    className={window.location.pathname === "/Login"}  
    
    >
        Login
    </Link>
    </a>
      
      <br />
      
    </div>
    <div className="col-md-9 register-right">
        
      <div className="tab-content" id="myTabContent">
          
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            
          <h3 className="register-heading">Fumes Registration</h3>
          
          <div className="row register-form">
              
            <div className="col-md-6">
                
              <div className="form-group">
                  
                <input 
                id="materialRegisterFormFirstName" 
                type="text" 
                className="form-control" 
                placeholder="First Name *"
                onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="materialRegisterFormLastName"
                type="text" 
                className="form-control" 
                placeholder="Last Name *" 
                onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="materialRegisterFormPassword" 
                type="password" 
                className="form-control" 
                placeholder="Password *" 
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="City" 
                type="text" 
                className="form-control"
                placeholder="City (ex. Akron) *"
                onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="Make" 
                type="text" 
                className="form-control" 
                placeholder="Car Make *" 
                onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="Model" 
                type="text"
                className="form-control" 
                placeholder="Car Model *" 
                onChange={(e) => setModel(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input 
                id="materialRegisterFormEmail" 
                type="email" 
                className="form-control" 
                placeholder="Your Email *" 
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="materialRegisterFormPhone" 
                type="text" 
                minLength={10} 
                maxLength={10} 
                name="txtEmpPhone" 
                className="form-control" 
                placeholder="Your Phone *" 
                onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                id="StreetAddress" 
                type="text" 
                className="form-control" 
                placeholder="Street Address *" 
                onChange={(e) => setStreet(e.target.value)}
                 />
              </div>
              <div className="form-group">
                <input 
                id="Zip" 
                type="text" 
                className="form-control" 
                placeholder="Zip (ex.12345) *" 
                onChange={(e) => setZip(e.target.value)}
                 />
              </div>
              <div className="form-group">
                <input 
                id="State" 
                type="text" 
                className="form-control"
                placeholder="State (ex. OH) *"
                onChange={(e) => setState(e.target.value)}
                />
              </div>
              <Link
              to="/member"
              className={window.location.pathname === "/Member" ? "nav-link active" : "nav-link text-dark"}
            >
              <button 
              type="submit" 
              className="btnRegister" 
              value="Register"
              onClick={registerSubmit}
              
              
            
                  >Register</button> 
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        <Footer />
        </>
  );
}
export default Register;
