import React from "react";
import { Outlet } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      LandingPage
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
