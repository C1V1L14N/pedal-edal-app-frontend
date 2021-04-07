import AuthNav from "./auth-nav";
import DetailsButton from "./details-button";
import '../Style/desktop.css';

const Menu = () => {

    return (
        <div id="menu-container">
            <AuthNav/>
            <DetailsButton />
            <button className="menu-btn" type="button">About Pedal-edal</button>
        </div>
    )

}

export default Menu;