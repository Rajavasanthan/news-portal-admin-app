import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const ProtectedRouter = () => {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="container-fluid m-0  p-0">
            <Topbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedRouter;
