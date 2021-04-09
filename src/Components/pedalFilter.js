import '../Style/desktop.css';

const pedalFilter = ({userLoggedIn}) => {
    if(userLoggedIn === true) {

        return(
            <button className="menu-btn">
                All Pedals
            </button>
        )

    }else {
        return(
            null
        )
    }
}

export default pedalFilter;