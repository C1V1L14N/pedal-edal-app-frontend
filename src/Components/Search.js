import React, {useState, useEffect} from 'react';

const Search = ({userLoggedIn, input:keyword, onChange:setKeyword}) => {

    if(userLoggedIn === true){
    

    return(
        <div>
        <form id="search-form">
            <input id="search-input"
            type="text"
            name="search"
            placeholder="Search here"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
            />
        </form>
        <div id="results"></div>
        </div>

    )

}else{
    return(
        null
    )
}
}
export default Search;