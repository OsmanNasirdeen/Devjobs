import React, { useState, useRef, useEffect } from "react";
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
import { controls } from "../controllers/controllers";
const Navbar = ({ darkTheme, getData }) => {
  const titlePlaceholderDesktop = "Filter by title, companies, expertise...";
  const titlePlaceholderTablet = "Filter by title...";
  const deviceSize = useRef(window.innerWidth);
  const [FilterActive, setFilterActive] = useState(false);
  // display filter on mobile function
  const displayFilter = () => {
    setFilterActive(() => !FilterActive);
    document.body.classList.toggle("modal-open");
  };

  const filterData = (e) => {
    // hides modal overlay and modal on mobile
    if (deviceSize.current < 767) {
      displayFilter();
    }
    e.preventDefault();
    const jobTitle = document.querySelector(".job-title").value;
    const jobLocation = document.querySelector(".job-location").value;
    const contractChecked = document.querySelector(
      ".full-time-checkbox"
    ).checked;

    // ensures search fields to filter for are not empty/undefined
    if (
      (!jobTitle || jobTitle.trim().length === 0) &&
      (!jobLocation || jobLocation.trim().length === 0) &&
      !contractChecked
    ) {
      return alert("provide details to search for !!!");
    }
    // filter for location only
    if (
      (!jobTitle || jobTitle.trim().length === 0) &&
      jobLocation &&
      !contractChecked
    ) {
      return getData(
        `https://server-devjobs.onrender.com/locations/${jobLocation.trim()}`
      );
    }
    // filter for location and full time
    if (
      (!jobTitle || jobTitle.trim().length === 0) &&
      jobLocation &&
      contractChecked
    ) {
      return getData(
        `https://server-devjobs.onrender.com/positions?location=${jobLocation.trim()}&contract=full time`
      );
    }

    // filter for title only
    if (
      jobTitle &&
      (!jobLocation || jobLocation.trim().length === 0) &&
      !contractChecked
    ) {
      return getData(
        `https://server-devjobs.onrender.com/category/${jobTitle.trim()}`
      );
    }

    // filter for title and full time
    if (
      jobTitle &&
      (!jobLocation || jobLocation.trim().length === 0) &&
      contractChecked
    ) {
      return getData(
        `https://server-devjobs.onrender.com/positions?position=${jobTitle.trim()}&contract=full time`
      );
    }
    // filter for only full time
    if (
      (!jobTitle || jobTitle.trim().length === 0) &&
      (!jobLocation || jobLocation.trim().length === 0) &&
      contractChecked
    ) {
      return getData(`https://server-devjobs.onrender.com/contracts/full time`);
    }
    // filter title,location and full time
    if (jobTitle && jobLocation.trim().length !== 0 && contractChecked) {
      return getData(
        `https://server-devjobs.onrender.com/positions?position=${jobTitle.trim()}&location=${jobLocation.trim()}&contract=full time`
      );
    }
    // filter for title,location
    if (jobTitle && jobLocation.trim().length !== 0 && !contractChecked) {
      return getData(
        `https://server-devjobs.onrender.com/positions?position=${jobTitle.trim()}&location=${jobLocation.trim()}`
      );
    }
  };
  const filterPOsitionMobile = () => {
    const jobTitle = document.querySelector(".job-title").value;
    if (jobTitle || jobTitle.trim().length !== 0) {
      return getData(
        `https://server-devjobs.onrender.com/category/${jobTitle.trim()}`
      );
    }
  };
  return (
    <>
      <div className="navbar">
        <div
          className="filter-bar"
          style={{ background: darkTheme ? "var(--very-dark-blue)" : "" }}>
          <form action="" className="filter-form">
            <div className="filter-search-container">
              <label
                for="title"
                className="icon-search-label"
                onClick={
                  deviceSize.current < 767
                    ? () => {
                        filterPOsitionMobile();
                      }
                    : ""
                }>
                <img
                  src={searchIcon}
                  alt="icon-search"
                  className="icon-search"
                />
              </label>
              <input
                type="text"
                className="job-title"
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
                className="job-location"
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
                style={FilterActive ? { width: "100%", height: "100%" } : {}}
                onClick={(e) => {
                  filterData(e);
                }}>
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
        style={FilterActive ? styles.modalOverlay : {}}
        onClick={() => controls.hideModal(displayFilter)}></div>
    </>
  );
};

export default Navbar;
