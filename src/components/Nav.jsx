
import React from "react";
import logo from "../assets/images/logo.svg";
import bar from "../assets/images/bar.svg";
import { Link } from "react-router-dom";
import "./cssfile.css";
import { useState } from "react";
import { renderHook } from "@testing-library/react";

// const Nav = () => {
//   return (
//     <nav>
     
//       <input type="checkbox" id="check" />
//       <label htmlFor="check">
//         <img id="btn" src={bar} alt="menu" />
//         <i className="fa fa-times" id="cancel"></i>
//       </label>
//       <section className="navContainer">
//         <section className="navbar-collapse">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/Home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/Product">Services</Link>
//             </li>
//             <li className="nav-item">
//             <Link to="/About">About</Link>
//             </li>
//             <li className="nav-item">
//             <Link to="/Footer">Contact</Link>
//             </li>
      
            
//           </ul>
//         </section>
//         <section className="rightIcon">
//           <i className="fas fa-home"></i>
//           <i className="far fa-envelope"></i>
//           <i className="fas fa-tools"></i>
//         </section>
//       </section>
//     </nav>
//   );
// };

// export default Nav;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
 // Create a separate CSS file for styling

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <input type="checkbox" id="check" checked={isChecked} />
      <label htmlFor="check" onClick={toggleMenu}>
        <img id="btn" src={bar} alt="menu" />
        <i className={`fa ${isChecked ? "fa-times" : "fa-bars"}`} id="cancel"></i>
      </label>
      <section className="navContainer">
        <section className={`navbar-collapse ${isChecked ? "active" : ""}`}>
          <ul className={`navbar-nav ${isChecked ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/Home" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Product" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Footer" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </section>
        <section className="rightIcon">
          <i className="fas fa-home"></i>
          <i className="far fa-envelope"></i>
          <i className="fas fa-tools"></i>
        </section>
      </section>
    </nav>
  );
};

export default Nav;
