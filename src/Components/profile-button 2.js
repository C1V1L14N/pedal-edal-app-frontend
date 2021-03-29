import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileButton = () => {

  return (
    <Link  to="/profile" >
          <button id="profile-button" type="button">
              Profile
          </button>
      </Link>
  );
};

export default ProfileButton;