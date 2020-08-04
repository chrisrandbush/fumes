import React, {useState} from 'react';
import api from "../utils/api";
import { useHistory } from "react-router-dom";
import newRegis from "../assets/newRegis.png";
import newForm from "../assets/newForm.png";
import newMech from "../assets/newMech.png";

import HERO from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function Main() {
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
        history.push("/member");
      });
  };
    return (
      <>
      <HERO backgroundImage="https://images.unsplash.com/photo-1508171997656-fdf7cf6c4df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <Navbar />
      <div id="landCont">
        <div className="landText" id="height">
          <h1>Fumes</h1>
          <h3>Taking the Trouble Out of Car Care</h3>
        </div>
        <div className="flexIt">
          <div className="d-flex justify-content-center h-100">
            <div className="card" id="logCard">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square" /></span>
                  <span><i className="fab fa-google-plus-square" /></span>
                  <span><i className="fab fa-twitter-square" /></span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)}
 />
                  </div>
                  <div className="align-items-center remember">
                    <input type="checkbox" />Remember Me
                  </div>
                  <div className="form-group">
                    <input type="submit" onClick={logInSubmit} defaultValue="Login" className="btn float-right login_btn" />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="/register">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </HERO>
      <section className="mainInfo" id="mainInfo">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="infoText">
                <h1>Fumes</h1>
                <h3>Our Mission</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="showOff mb-5">
          <div className="container">
            <div className="row" id="flexEm">
              <div className="col-lg-6 col-xs-12" id="mechImg">
                <div className="mechImg">
                </div>
              </div>
              <div className="col-lg-6 col-xs-12" id="imgAside">
                <div className="imgAside">
                  <div className="tabs">
                    <a className="nav-link mbr-fonts-style display-7 active" id="serviceBtn" role="tab" data-toggle="tab" href="/services">
                      Services</a>
                    <a className="nav-link mbr-fonts-style display-7 active" id="regisBtn" role="tab" data-toggle="tab" href="/register">
                      Register</a>
                  </div>
                  <p> Our mission at Fumes is to give every customer our highlest level of attention to detail, care to their
                    personal vehicles and complete transparency into our work. Any mistakes made will fall on our shoulders and
                    not on our customers.
                    If our customer is not satisfied, we are not satisfied. We promise to make each service call convenient and
                    hassle-free.
                  </p>  
                </div>
              </div>
            </div>
          </div>     
        </div>

    <div className="container-fluid text-center pt-5" id="serviceMain">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br />
  <div className="row">
    <div className="col-sm-4">
      <span className="fa fa-filter logo-small" />
      <h4>Oil &amp; Fluids</h4>
      <p>Comes with our spill free guarantee!</p>
    </div>
    <div className="col-sm-4">
      <span className="fa fa-unlock-alt logo-small" />
      <h4>Lock Service</h4>
      <p>Locked your keys in your car? Same.</p>
    </div>
    <div className="col-sm-4">
      <span className="fa fa-cloud logo-small" />
      <h4>Filters</h4>
      <p>Replacing old filters for new ones</p>
    </div>
  </div>
  <br /><br />
  <div className="row">
    <div className="col-sm-4">
      <span className="fa fa-battery-three-quarters logo-small" />
      <h4>Batteries</h4>
      <p>From inspection to replacement</p>
    </div>
    <div className="col-sm-4">
      <span className="fa fa-hand-paper-o logo-small" />
      <h4>Brakes</h4>
      <p>Inspecting your pads to replacing them</p>
    </div>
    <div className="col-sm-4">
      <span className="fa fa-car logo-small" />
      <h4>Tires</h4>
      <p>Plugging leaks, replacing flats, or even rotations!</p>
    </div>
  </div>
</div>

      </section>
<div className="parallax">

      <article className="howWorks">
        <div id="works">
          <h1>How it Works</h1>
        </div>
        <div className="steps">
          <div>
            <img src={newRegis} alt="register" />
            <p><strong>Step 1:</strong> Fill out the registration form</p>
          </div>
          <div>
            <img src={newForm} alt="register" />
            <p><strong>Step 2:</strong> Schedule service for your vehicle</p>
          </div>
          <div>
            <img src={newMech} alt="register" />
            <p><strong>Step 3:</strong> Mechanic arrives at the scheduled time to your home</p>
          </div>
        </div>
      </article>
      </div>
      <Footer />
      </>
    )
}

export default Main;