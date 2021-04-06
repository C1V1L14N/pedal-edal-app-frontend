import React, {useState, useEffect} from 'react';

const Search = ({filteredPedalList, setFilteredPedalList, searchOnChange}) => {

    filteredPedalList.forEach(pedal => {
        const searchResult = document.createElement("P")
        searchResult.innerText = `${pedal.name}`
        document.getElementById("results").appendChild(searchResult);

    });

    return(
        <div>
        <form id="search-form">
            <input id="search-input"
            type="text"
            name="search"
            placeholder="Search here"
            onChange={searchOnChange}
            // onSubmit={updateInput()}
            required
            />
        </form>
        <div id="results"></div>
        </div>

    )

}

export default Search;