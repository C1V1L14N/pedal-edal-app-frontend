import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';

const Header = ({userLoggedIn, allPedals, input, setInput, filteredPedalList, setFilteredPedalList, searchOnChange}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <Search userLoggedIn={userLoggedIn} filteredPedalList={filteredPedalList} setFilteredPedalList={setFilteredPedalList} searchOnChange={searchOnChange} id="kenny"/>
        </header>

    )

}

export default Header;