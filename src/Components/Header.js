import logo from '../Assets/pedaledal.svg'
import Search from './Search.js'
import '../Style/desktop.css';
import PedalList from './pedalList';
import ManufacturerFilter from './manufacturerFilter.js'
import PedalFilter from './pedalFilter.js'

const Header = ({userLoggedIn, input, setInput, filteredPedalList, onChange}) => {

    return (

        <header id="header">
            <img id="logo" src={logo} alt="site-logo-pedal-edal"/>
<<<<<<< HEAD
            <div id="search-container">                
                <PedalFilter userLoggedIn={userLoggedIn}/>
                <ManufacturerFilter userLoggedIn={userLoggedIn}/>
                <Search userLoggedIn={userLoggedIn} id="kenny"/>
=======
            <div>                
                <PedalFilter/>
                <ManufacturerFilter/>
                <Search userLoggedIn={userLoggedIn} filteredPedalList={filteredPedalList} input={input} setInput={setInput} onChange={onChange} id="kenny"/>
                <PedalList filteredPedalList={filteredPedalList} />
>>>>>>> develop
            </div>
        </header>

    )

}

export default Header;