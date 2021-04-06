

const pedalFilter = ({userLoggedIn}) => {
    if(userLoggedIn === true) {

        return(
            <button className="filter-btn">
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