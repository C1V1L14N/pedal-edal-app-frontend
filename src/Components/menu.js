import AuthNav from "./auth-nav";
import DetailsButton from "./details-button"

const Menu = () => {

    return (
        <div id="menu-container">
            <AuthNav id="logout-btn"/>
            <DetailsButton />
            <button>About Pedal-edal</button>
        </div>
    )

}

export default Menu;