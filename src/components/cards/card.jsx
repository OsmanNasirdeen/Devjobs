import React from "react";
import { Link } from "react-router-dom";
const Card = ({ details, data, darkTheme }) => {
  return (
    <div
      className="card"
      style={{ background: darkTheme ? "var(--very-dark-blue)" : "" }}>
      <div
        className="company-logo"
        style={{ background: details.logoBackground }}>
        <img src={details.logo} alt="" />
      </div>
      <div className="time-contract-container">
        <h3 className="posted-at">{details.postedAt}</h3>
        <span className="dot"></span>
        <h3 className="contract">{details.contract}</h3>
      </div>
      <h2 className="position" style={{ color: darkTheme ? "white" : "" }}>
        <Link
          className="link-to-details-page"
          to={`/positions/${details.id}`}
          state={{ data: data }}>
          {details.position}
        </Link>
      </h2>
      <h3 className="company-name">{details.company}</h3>
      <h4 className="company-location">{details.location}</h4>
    </div>
  );
};

export default Card;
