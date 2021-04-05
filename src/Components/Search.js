import '../Style/desktop.css';

const Search = ({userLoggedIn}) => {

    if(userLoggedIn === true){

        return(

        <form id="search-form">
            <input id="search-input"
            type="text"
            name="search"
            placeholder="Search here"
            // onChange={(e) => setKeyword(e.target.value)}
            required
            />
            <input id="search-button"
            
            type="submit"
            value="Search"
            />

            </form>

        )

    }else{
        return(
            null
        ) }
}

export default Search;