import React from "react";
import scoot from "../../../assets/logos/scoot.svg";
const Card = () => {
  return (
    <div className="card">
      <div className="company-logo">
        <img src={scoot} alt="" />
      </div>
      <div className="time-contract-container">
        <h3 className="posted-at">5h ago</h3>
        <span className="dot"></span>
        <h3 className="contract">full time</h3>
      </div>
      <h2 className="position">senior software engineer</h2>
      <h3 className="company-name">scoot</h3>
      <h4 className="company-location">united kingdom</h4>
    </div>
  );
};

export default Card;
