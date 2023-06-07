import React, { useState, useRef } from "react";
import locationIcon from "../components/cards/assets/desktop/icon-location.svg";
import searchIcon from "../components/cards/assets/desktop/icon-search.svg";
import filterIcon from "../components/cards/assets/mobile/icon-filter.svg";
import "./mobile-header.css";
import "./tablet-header.css";
import "./Navbar.css";
// darkTheme styles
import { darkThemeStyles } from "./features/darkThemeStyles";
// modal for mobile styles
import { styles } from "./features/modalstyles";
const Navbar = ({ darkTheme }) => {
  const titlePlaceholderDesktop = "Filter by title, companies, expertise...";
  const titlePlaceholderTablet = "Filter by title...";
  const deviceSize = useRef(window.innerWidth);
  const [FilterActive, setFilterActive] = useState(false);
  // display filter on mobile function
  const displayFilter = () => {
    setFilterActive(() => !FilterActive);
    document.body.classList.toggle("modal-open");
  };
  return (
    <>
      <div className="navbar">
        <div
          className="filter-bar"
          style={{ background: darkTheme ? "var(--very-dark-blue)" : "" }}>
          <form action="" className="filter-form">
            <div className="filter-search-container">
              <label for="title" className="icon-search-label">
                <img
                  src={searchIcon}
                  alt="icon-search"
                  className="icon-search"
                />
              </label>
              <input
                type="text"
                id="title"
                placeholder={
                  deviceSize.current > 996
                    ? titlePlaceholderDesktop
                    : titlePlaceholderTablet
                }
                required
                style={darkTheme ? darkThemeStyles.filterInputStyles : {}}
              />
              <span
                className="icon-filter"
                onClick={() => displayFilter()}
                style={{
                  background: darkTheme ? "var(--very-dark-blue)" : "",
                }}>
                <img
                  src={filterIcon}
                  alt=""
                  style={{
                    filter: darkTheme
                      ? "brightness(0) saturate(100%) invert(100%) sepia(93%) saturate(0%) hue-rotate(252deg) brightness(113%) contrast(100%)"
                      : " ",
                  }}
                />
              </span>
            </div>

            <div
              className="filter-location-container mobile-block"
              style={FilterActive ? styles.filterLocation : {}}>
              <label for="location" className="icon-location-label">
                <img src={locationIcon} alt="icon-location" />
              </label>
              <input
                type="text"
                id="location"
                placeholder="Filter by location"
                required
                style={darkTheme ? darkThemeStyles.filterInputStyles : {}}
              />
            </div>
            <div
              className="filter-fullTime-container mobile-block"
              style={FilterActive ? styles.filterFullTime : {}}>
              <input
                type="checkbox"
                name="full-time"
                id="full-time"
                className={`full-time-checkbox ${
                  darkTheme ? "white-background" : ""
                }`}
              />
              <label
                for="full-time"
                style={{
                  color: darkTheme ? "var(--white)" : "",
                }}>
                {deviceSize.current > 1024 || deviceSize.current < 767
                  ? "full time only"
                  : "full time"}
              </label>
            </div>
            <div
              className="filter-button mobile-block"
              style={FilterActive ? styles.filterButton : {}}>
              <button
                type="submit"
                className="button-violet"
                style={FilterActive ? { width: "100%", height: "100%" } : {}}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`modal ${FilterActive ? "modal-container" : ""}`}
        style={darkTheme ? { background: "var(--very-dark-blue)" } : {}}></div>
      <div
        className="modal-overlay"
        style={FilterActive ? styles.modalOverlay : {}}></div>
    </>
  );
};

export default Navbar;
