import React from "react";
// import Cards from "../cards/cards";

// {children} renders Cards component
const Main = ({ children }) => {
  const loadMoreCards = ()=>{
    const cardsContainer = document.querySelector(".cards-container")
    cardsContainer.style.height="auto"
  }
  return (
    <div className="main-container">
      {children}
      <div className="load-more-btn-container">
        <button className="button-violet" onClick={()=>{
          loadMoreCards()
        }}>Load More</button>
      </div>
    </div>
  );
};

export default Main;
