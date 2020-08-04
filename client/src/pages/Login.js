import React, { useState } from "react";
import api from "../utils/api";
import { useHistory, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";

function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  let history = useHistory();

  const logInSubmit = (e) => {
    e.preventDefault();
    api
      .logIn({
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/Member");
      });
  };

  return (
    <>
    
    <div className="logBody">
    <NavWhite />
   <form>
  <div className="container register">
    <div className="row">
      <div className="col-md-3 register-left">
        <img src="https://i.ibb.co/LNpS6vD/iconfinder-wrench-1608741.png" alt="iconfinder-wrench-1608741" border={0} />
        <h3>Welcome Back</h3>
        <p>Glad to see you again!</p>
        <br />
      <p>Not registered?</p>
      <a>
      <Link
    to="/Register"
    className={window.location.pathname === "/Register"}  
    
    >
        Register
    </Link>
    </a>
      </div>
      <div className="col-md-9 register-right">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 className="register-heading">Fumes Login</h3>
            <div className="row register-form">
              <div className="col-md-12">
                <div className="form-group">
                  <input type="email" 
                  className="form-control" 
                  placeholder="Email *" 
                  onChange={(e) => setEmail(e.target.value)}
                   />
                </div>
                <div className="form-group">
                  <input id="materialRegisterFormPassword" 
                  type="password" 
                  className="form-control" 
                  placeholder="Password *"
                  onChange={(e) => setPassword(e.target.value)}
                   />
                </div>
                <Link
              to="/member"
              className={window.location.pathname === "/Member" ? "nav-link active" : "nav-link text-dark"}
            >
                <button type="submit" 
                className="btnRegister" 
                value="Login"
                onClick={logInSubmit}
                >Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</div>
<Footer />
</>
  );
}

export default Login;
