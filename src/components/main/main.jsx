import React from "react";
import Cards from "../cards/cards";
const Main = () => {
  return (
    <div className="main-container">
      <Cards />
      <div className="load-more-btn-container">
        <button className="button-violet">Load More</button>
      </div>
    </div>
  );
};

export default Main;
