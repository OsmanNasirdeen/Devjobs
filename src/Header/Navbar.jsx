import React, { useState, useRef } from "react";
import locationIcon from "../components/cards/assets/desktop/icon-location.svg";
import searchIcon from "../components/cards/assets/desktop/icon-search.svg";
import filterIcon from "../components/cards/assets/mobile/icon-filter.svg";
import "./mobile-header.css";
import "./tablet-header.css";
import "./Navbar.css";

// modal for mobile styles
import { styles } from "./features/modalstyles";
const Navbar = () => {
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
        <div className="filter-bar">
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
              />
              <span className="icon-filter" onClick={() => displayFilter()}>
                <img src={filterIcon} alt="" />
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
              />
            </div>
            <div
              className="filter-fullTime-container mobile-block"
              style={FilterActive ? styles.filterFullTime : {}}>
              <input
                type="checkbox"
                name="full-time"
                id="full-time"
                className="full-time-checkbox"
              />
              <label for="full-time">
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
        className="modal"
        style={
          FilterActive ? styles.modalContainer : { display: "none" }
        }></div>
      <div
        className="modal-overlay"
        style={FilterActive ? styles.modalOverlay : {}}></div>
    </>
  );
};

export default Navbar;
