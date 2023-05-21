import React from "react";
// import Cards from "../cards/cards";

// {children} renders Cards component
const Main = ({ children }) => {
  return (
    <div className="main-container">
      {children}
      <div className="load-more-btn-container">
        <button className="button-violet">Load More</button>
      </div>
    </div>
  );
};

export default Main;
