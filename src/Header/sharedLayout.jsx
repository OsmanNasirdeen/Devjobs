import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./navbar-banner";
const SharedLayout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default SharedLayout;
