import React from "react";
import moon from "../../assets/desktop/icon-moon.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar-header">
        <div>devjobs</div>
        <ul>
          <li>
            <img src={moon} alt="icon-moon.svg" />
          </li>
          <li></li>
          <li>
            <img src={sun} alt="icon-sun.svg" />
          </li>
        </ul>
      </div>
      <div className="filter-bar">
        <form action="">
          <label for="title">title icon here</label>
          <input
            type="text"
            id="title"
            placeholder="filter by title, companies, expertise"
          />
          <label for="location">loc. icon here</label>
          <input type="text" id="location" placeholder="filter by location" />
          <input type="checkbox" name="full-time" id="full-time" />
          <label for="full-time">full time only</label>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
