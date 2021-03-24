import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const DetailsButton = () => {

  return (
    <Link  to="/details" >
          <button id="details-button" type="button">
              Details
          </button>
      </Link>
  );
};

export default DetailsButton;