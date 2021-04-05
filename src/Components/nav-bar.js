import React from "react";
import '../Style/desktop.css';


import AuthNav from "./auth-nav";
import DetailsButton from "./details-button"
import ProfileButton from "./profile-button"

const NavBar = ({userLoggedIn}) => {
  if(userLoggedIn === true) {

    return (
      <div id="nav-container">
        <nav>
          
            <AuthNav />
            <DetailsButton />
            <ProfileButton />
          
        </nav>
      </div>
    );
  }else {
    return(
      null
    ) }
};


export default NavBar;