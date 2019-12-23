/* Component that renders the header of the app */

import React from "react";
import logo from "../img/logo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <h4>
        <img src={logo} className="Header-logo" alt="logo" />
        Wheater<span className="highlightColor">/</span>io
      </h4>
    </div>
  );
}

export default Header;
