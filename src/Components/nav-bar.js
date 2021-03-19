import React from "react";
import './nav-bar.css';


import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <div id="nav-container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;