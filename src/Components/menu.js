import AuthNav from "./auth-nav";
import DetailsButton from "./details-button";
import '../Style/desktop.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import ManufacturerFilter from './manufacturerFilter.js'
import PedalFilter from './pedalFilter.js'

const Menu = ({userLoggedIn}) => {

    return (
        <div id="menu-container">
            <AuthNav/>
            <DetailsButton />
            <PedalFilter userLoggedIn={userLoggedIn}/>
            <ManufacturerFilter userLoggedIn={userLoggedIn}/>
            <Link id="menu-btn-link" to="/about">
                <button className="menu-btn" type="button">About Pedal-edal</button>
            </Link>
            
        </div>
    )

}

export default Menu;