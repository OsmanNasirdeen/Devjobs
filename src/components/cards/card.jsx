import React from "react";
// import scoot from "../../../assets/logos/scoot.svg";
const Card = ({ details }) => {
  return (
    <div className="card">
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
      <h2 className="position">{details.position}</h2>
      <h3 className="company-name">{details.company}</h3>
      <h4 className="company-location">{details.location}</h4>
    </div>
  );
};

export default Card;
