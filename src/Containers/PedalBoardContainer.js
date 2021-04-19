import React from 'react';
import '../Style/desktop.css';


const PedalBoard = ({userPedals}) => {

    const makeToScale = (pedal) => {
        pedal.width = Math.round((pedal.width * 3.7795275591)/3)
        pedal.length = Math.round((pedal.length * 3.7795275591)/3)
        }

    
    const pedalArray = userPedals.map((pedal) => {

        console.log("width before", pedal.width);
        makeToScale(pedal)
        console.log("width after", pedal.width);

        return(
        
            <div id="pedal-board-pedals-container" key={pedal.id}>
                <img src={process.env.PUBLIC_URL + pedal.image} height={pedal.length} width={pedal.width} />
            </div>
        
        
        )})

    if (userPedals){
    return(
        <div id="pedal-board-title">
        
            <h2>Your Pedals:</h2>
            <div id="pedal-board-array">
                {pedalArray}
            </div>
            <div id="pedal-board-itself">
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