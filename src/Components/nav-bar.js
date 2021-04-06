import React from "react";
import '../Style/desktop.css';


import AuthNav from "./auth-nav";
import DetailsButton from "./details-button"
import ProfileButton from "./profile-button"

const NavBar = ({userLoggedIn}) => {
  if(userLoggedIn === true) {

    return (
        <nav id="nav-container">
          
            <AuthNav id="logout-btn"/>
            <DetailsButton />
            <ProfileButton />
          
        </nav>

    );
  }else {
    return(
      null
    ) }
};


export default NavBar;