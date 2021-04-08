import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../Style/desktop.css';

const ProfileButton = () => {

  return (
    <Link id="menu-btn-link" to="/profile" >
          <button className="profile-board-button" type="button">
              My Collection
          </button>
      </Link>
  );
};

export default ProfileButton;