// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar2 = (props) => {


//   return (
//     <nav className="navbar navbar-expand-lg bg-light" style={{fontFamily:' "Merriweather", serif'}}>
//       <a className="nav-link" style={{ marginLeft: "20px" }}>
//         GKMIT RESTAURANT <span className="sr-only"></span>
//       </a>
//       <Link className="navbar-brand mx-auto">
//         <b>Checkout the Tasty Food </b>
//       </Link>
//       <Link className="btn btn-primary mx-4" to="/aboutus" role="button">
//         About Us
//       </Link>
//       <Link className="btn btn-primary mx-1" to="/contactus" role="button">
//         Contact Us
//       </Link>
//       <Link className="btn btn-primary mx-4" to="/cart">
//         Cart
//         {props.Count}
//       </Link>
//       <Link className="btn btn-primary mx-1" to="/login" role="button">
//         Sign Out
//       </Link>
//     </nav>
//   );
// };

// export default Navbar2;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const Navbar2 = (props) => {
  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: ' "Merriweather", serif' }}>
      <Navbar.Brand href="#" style={{ marginLeft: "20px" }}>
        YB RESTAURANT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto">
          <Link className="nav-link checkout-link">
            <b>Checkout the Tasty Food</b>
          </Link>
        </Nav> */}
        <Navbar.Brand className="mr-auto" style = {{marginLeft: "185px"}}>Checkout the Tasty Food</Navbar.Brand>
        <Nav>
          <Link className="btn btn-primary mx-4" to="/aboutus">
            About Us
          </Link>
          <Link className="btn btn-primary mx-1" to="/contactus">
            Contact Us
          </Link>
          <Link className="btn btn-primary mx-4" to="/cart">
            Cart {props.Count}
          </Link>
          <Link className="btn btn-primary mx-1" to="/login">
            Sign Out
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
