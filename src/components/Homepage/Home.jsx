import React from "react";
// {children} renders navbar & mainContents components
const Home = ({ children, isLoading }) => {
  return (
    <>
      <div
        className="spin-container"
        style={{ display: isLoading ? "block" : "none" }}>
        <div className="spinner"></div>
      </div>
      {children}
    </>
  );
};

export default Home;
