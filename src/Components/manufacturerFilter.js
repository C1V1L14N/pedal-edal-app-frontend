import '../Style/desktop.css';

const manufacturerFilter = ({userLoggedIn}) => {
    if(userLoggedIn === true) {

        return(
            <button className="menu-btn">
                All Manufacturers
            </button>
        )

    }else {
        return(
            null
        )
    }
}

export default manufacturerFilter;