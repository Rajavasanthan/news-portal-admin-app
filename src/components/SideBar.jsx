import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
        to={'/list-all-news'}
        >
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <div className="sidebar-brand-text mx-3">
            News website 
          </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link " to={"/list-all-news"}>
            <span>News</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Interface</div>     
        <li className="nav-item">
         <Link className="nav-link " to={"/list-all-category"}>
         <span>Categories</span>
       </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            {" "}
          </div>
        </li>

        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
};

export default SideBar;
