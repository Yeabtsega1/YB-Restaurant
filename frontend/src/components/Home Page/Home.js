// import React from "react";
// import Image from "./../images/gkmit.jpeg";
// // import Homepage from "./Homepage";
// import Navbar from "../Navbar/Navbar";
// import "./Home.css"

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//            <section id="hero">
//           <div className="hero-container">
//               <div className="hero-logo">
//                   <img src={Image} alt="GKMIT is busy"/>
//               </div>
//               <h1> Welcome To GKMIT Restaurant</h1>
//               <h2>Delight in every bite</h2>
//               <div className="actions">
//                  <a href="/login" className="main-2"> Login </a>
//                   <a href="/register" className="main-1">Register</a>
                 
//               </div>
//           </div>
//       </section>
//     </>
//   );
// };

// export default Home;
import React from "react";
import Image from "./../images/YB.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  
  return (
   <div>
    <Navbar />
    
    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo" >
          <img src={Image} alt="YB is busy" />
        </div>
        <div className="hero-text">
          <h1>Welcome To YB Restaurant</h1>
          <h2>Delight in every bite</h2>
        </div>
        <div className="actions">
          <Link to="/login" className="main-2">
            Login
          </Link>
          <Link to="/register" className="main-1">
            Register
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;



