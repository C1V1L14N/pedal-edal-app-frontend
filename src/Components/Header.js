import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';
import PedalList from './pedalList';

const Header = ({userLoggedIn, input, setInput, filteredPedalList, onChange}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
            <Search userLoggedIn={userLoggedIn} filteredPedalList={filteredPedalList} input={input} setInput={setInput} onChange={onChange} id="kenny"/>
            <PedalList filteredPedalList={filteredPedalList} />
        </header>

    )

}

export default Header;