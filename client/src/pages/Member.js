import React from 'react';
import Table from "../components/Table";
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";
import Feedback from "../components/Feedback";


function Members () {
    return (
      <>
      
    <div className="memberBody">
    <NavWhite />
        <Table></Table>
      <Feedback />
    </div>  
      <Footer />
     </>   
    )
}

export default Members;