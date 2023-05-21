import React from "react";
import moonIcon from "../components/cards/assets/desktop/icon-moon.svg";
import sunIcon from "../components/cards/assets/desktop/icon-sun.svg";
import logo from "../components/cards/assets/desktop/logo.svg";

const Banner = () => {
  return (
    <div className="Navbar-header">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="theme-toggle-container">
        <li className="icon-sun">
          <img src={sunIcon} alt="icon-sun.svg" />
        </li>
        <li>
          <input type="checkbox" className="theme-toggle-checkbox" />
        </li>
        <li className="icon-moon">
          <img src={moonIcon} alt="icon-moon.svg" />
        </li>
      </ul>
    </div>
  );
};

export default Banner;
