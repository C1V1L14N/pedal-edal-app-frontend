import React from 'react';

const SearchResults = ({filteredPedalList=[]}) => {
  
  return (
    <div id="search-results">
    { filteredPedalList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <p>{data.name}</p>
	          </div>	
    	   )	
    	 }
    	 return null
    }) }
    </div>
  );
}

export default SearchResults;