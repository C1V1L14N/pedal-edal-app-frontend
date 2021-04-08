import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../Style/desktop.css';

const PedalBoardButton = () => {

    return (
    <Link id="menu-btn-link" to="/pedalboard" >
            <button className="profile-board-button" type="button">
                Pedal Board
            </button>
        </Link>
    );
};

export default PedalBoardButton;

