import React from "react";
import '../Style/nav-bar.css';


import AuthNav from "./auth-nav";
import DetailsButton from "./details-button"

const NavBar = () => {
  return (
    <div id="nav-container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          <DetailsButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;