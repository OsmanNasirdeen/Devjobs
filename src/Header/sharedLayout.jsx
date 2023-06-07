import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./navbar-banner";
const SharedLayout = ({ darkTheme, setDarkTheme }) => {
  return (
    <>
      <Banner darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
