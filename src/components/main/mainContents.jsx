import React from "react";

// {children} renders Cards component
const Main = ({ children, data, isLoading, darkTheme }) => {
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
        <div
          className="no-data-msg"
          style={{ display: isLoading ? "none" : "" }}>
          <h1 style={{ color: darkTheme ? "var(--white)" : "var(--midnight)" }}>
            No Data Found !!!
          </h1>
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
