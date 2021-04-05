

const Search = () => {

    return(

        <form id="search-form">
            <input id="search-input"
            type="text"
            name="search"
            placeholder="Search here"
            // value={keyword}
            // onChange={(e) => setKeyword(e.target.value)}
            required
            />
            <input id="search-button"
            
            type="submit"
            value="Search"
            />

        </form>

    )

}

export default Search;