import React from 'react';
import '../Style/desktop.css';


const PedalBoard = ({userPedals}) => {

    
    const pedalArray = userPedals.map((pedal) => {
        return(
        
            <div id="pedal-board-pedals-container" key={pedal.id}>
                <img src={process.env.PUBLIC_URL + pedal.image} />
            </div>
        
        
        )})

    if (userPedals){
    return(
        <div id="pedal-board-title">
        
            <h2>Your Pedals:</h2>
            <div id="pedal-array">
                {pedalArray}
            </div>

        </div>
    )
    }else{
        return(
            <h1>No pedal data</h1>
        )
    }

}

export default PedalBoard;