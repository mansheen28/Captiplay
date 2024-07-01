import React from 'react';
import "../Css/Navbar.css";
import logo from "../images/CaptiPlay.png"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="App Logo" />
      </div>
      <h1 className="navbar-title">CAPTIPLAY</h1>
    </nav>
  );
}

export default Navbar;
