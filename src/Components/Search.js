import React, {useState, useEffect} from 'react';

const Search = ({userLoggedIn, input:keyword, onChange:setKeyword}) => {
    if(userLoggedIn === true) {

        return(
            <div>
            <form id="search-form">
                <input id="search-input"
                type="text"
                name="search"
                placeholder="Find Pedals or Manufacturers"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                autoComplete="off"
                required
                />
            </form>
            </div>

        )
    }else{
        return(
            null
        )
    }
}
export default Search;