import React from 'react';

const PedalList = ({filteredPedalList=[]}) => {
  return (
    <>
    { filteredPedalList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default PedalList