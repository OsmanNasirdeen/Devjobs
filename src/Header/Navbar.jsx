import React from "react";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import logo from "../../assets/desktop/logo.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import searchIcon from "../../assets/desktop/icon-search.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar-header">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="theme-toggle-container">
          <li className="icon-moon">
            <img src={moonIcon} alt="icon-moon.svg" />
          </li>
          <li>
            <input type="checkbox" className="theme-toggle-checkbox" />
          </li>
          <li className="icon-sun">
            <img src={sunIcon} alt="icon-sun.svg" />
          </li>
        </ul>
      </div>
      <div className="filter-bar">
        <form action="" className="filter-form">
          <div className="filter-search-container">
            <label for="title" className="icon-search-label">
              <img src={searchIcon} alt="icon-search" />
            </label>
            <input
              type="text"
              id="title"
              placeholder="Filter by title, companies, expertise..."
              required
            />
          </div>
          <div className="filter-location-container">
            <label for="location" className="icon-location-label">
              <img src={locationIcon} alt="icon-location" />
            </label>
            <input
              type="text"
              id="location"
              placeholder="filter by location"
              required
            />
          </div>
          <div className="filter-fullTime-container">
            <input
              type="checkbox"
              name="full-time"
              id="full-time"
              className="full-time-checkbox"
            />
            <label for="full-time">full time only</label>
          </div>
          <div className="filter-button">
            <button type="submit" className="button-violet">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Navbar;
