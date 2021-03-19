import logo from '../Assets/pedaledal.svg'
import './Header.css'
import Search from './Search.js'

function Header() {

    return (

        <header>
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <Search id="kenny"/>
        </header>

    )

}

export default Header;