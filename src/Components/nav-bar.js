import React from "react";
import '../Style/desktop.css';
import MenuIcon from '../Components/menuIcon.js'
import Menu from '../Components/menu.js'




import ProfileButton from "./profile-button"
import PedalBoardButton from "./pedalBoardButton.js"

const NavBar = ({userLoggedIn}) => {
  if(userLoggedIn === true) {

    return (
        <nav id="nav-container">
          
            <ProfileButton />
            <PedalBoardButton/>
            <Menu/>
            <MenuIcon/>
          
        </nav>

    );
  }else {
    return(
      null
    ) }
};


export default NavBar;