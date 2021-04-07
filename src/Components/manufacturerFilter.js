

const manufacturerFilter = ({userLoggedIn}) => {
    if(userLoggedIn === true) {

        return(
            <button className="filter-btn">
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