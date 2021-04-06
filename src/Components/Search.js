import React, {useState, useEffect} from 'react';

const Search = ({allPedals}) => {
    
    const [input, setInput] = useState('');
    const [filteredPedalList, setFilteredPedalList] = useState([]);


    const updateInput = async () => {
        if (input !== ''){
        console.log("is this working?");
        const inputToLowerCase = input.toLowerCase()
        const filtered = allPedals.filter(pedal => {
            console.log(pedal.name);
            if(pedal.name.toLowerCase().includes(inputToLowerCase)){
                filteredPedalList.push(pedal)
                console.log("fpl: ", filteredPedalList);
                const result = document.createElement("P");
                result.innerText = `${pedal.name}`
                document.getElementById("results").appendChild(result);
        }
        });
        setFilteredPedalList(filtered)
        setInput('');
    }}


    return(
        <div>
        <form id="search-form">
            <input id="search-input"
            type="text"
            name="search"
            placeholder="Search here"
            onChange={(e) => setInput(e.target.value), updateInput()}
            // onSubmit={updateInput()}
            required
            />
        </form>
        <div id="results"></div>
        </div>

    )

}

export default Search;