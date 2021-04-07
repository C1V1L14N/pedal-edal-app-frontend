import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../Style/desktop.css';

const DetailsButton = () => {

  return (
    <Link  to="/details" >
          <button className="menu-btn" type="button">
              Details
          </button>
      </Link>
  );
};

export default DetailsButton;