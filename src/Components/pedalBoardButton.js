import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PedalBoardButton = () => {

    return (
    <Link  to="/pedalboard" >
            <button id="profile-button" type="button">
                Pedal Board
            </button>
        </Link>
    );
};

export default PedalBoardButton;

