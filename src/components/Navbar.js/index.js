import React, { useState } from "react";
import logo from "../../assets/Logo_mockup.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" width="100px" />
      </div>
      <ul className={click ? "navbar__menu active" : "navbar__menu"}>
        <li className="menu__nav-item">
          <a href="#">Home</a>
        </li>
        <li className="menu__nav-item">
          <a href="#">Contact</a>
        </li>
        <li className="menu__nav-item">
          <a href="#">F.A.Q</a>
        </li>
      </ul>
      <div className="menu__hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="hamburger__icons" size={30} />
        ) : (
          <FaBars className="hamburger__icons" size={30} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
