import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';

const Header = ({userLoggedIn}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <Search userLoggedIn={userLoggedIn} id="kenny"/>
        </header>

    )

}

export default Header;