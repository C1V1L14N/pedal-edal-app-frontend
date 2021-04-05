import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';

const Header = ({userLoggedIn, allPedals}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <Search userLoggedIn={userLoggedIn} allPedals={allPedals} id="kenny"/>
        </header>

    )

}

export default Header;