import React from "react";

// {children} renders Cards component
const Main = ({ children, data }) => {
  const loadMoreCards = () => {
    const cardsContainer = document.querySelector(".cards-container");
    const loadMoreBtn = document.querySelector(".load-more-btn-container");
    cardsContainer.style.height = "auto";
    loadMoreBtn.style.display = "none";
  };
  return (
    <div className="main-container">
      {data.length > 0 ? (
        children
      ) : (
        <div className="no-data-msg">
          <h1>No Data Found !!!</h1>
        </div>
      )}
      {data.length < 11 ? (
        ""
      ) : (
        <div className="load-more-btn-container">
          <button
            className="button-violet"
            onClick={() => {
              loadMoreCards();
            }}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
