import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Navbar-banner";
const SharedLayout = ({ darkTheme, setDarkTheme }) => {
  return (
    <>
      <Banner darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
