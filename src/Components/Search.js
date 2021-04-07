import React, {useState, useEffect} from 'react';

const Search = ({input:keyword, onChange:setKeyword}) => {

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

}

export default Search;