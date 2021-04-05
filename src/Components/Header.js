import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';
import ManufacturerFilter from './manufacturerFilter.js'
import PedalFilter from './pedalFilter.js'

const Header = ({userLoggedIn}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <div>                
                <PedalFilter/>
                <ManufacturerFilter/>
                <Search userLoggedIn={userLoggedIn} id="kenny"/>
            </div>
        </header>

    )

}

export default Header;