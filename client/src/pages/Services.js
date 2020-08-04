import React from 'react';
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";
import ServCards from '../components/ServCards';
import CartBtn from '../components/CartBtn'


function Services () {
    return (
      <>
      

<div className="memberBody">
<NavWhite />
      <ServCards />
        <CartBtn />
      </div>
<Footer />
</>

    )
}
export default Services;
