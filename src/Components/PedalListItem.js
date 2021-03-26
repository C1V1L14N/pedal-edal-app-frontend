import PedalDetailsbutton from './details-button';
import PedalRating from './PedalRating';

const PedalListItem = ({userData}) => {

    
    const pedalArray = userData[0].pedals.map((pedal) => {
        return(
        <div key={pedal.id}>
          <div className="pedal_container">
            <p className="pedal_name">Name: {pedal.name} </p>
            <p className="pedal_category">Category: {pedal.pedalCategory}</p>
            <p className="pedal_type">Effect Type: {pedal.effectType} </p>
            <PedalRating/>
            <img></img>
          </div>
          
        </div>
        )})

    if (userData[0]){
    return(
        <div id="list-item">
            
            <h1>{userData[0].name}</h1>
            <h2>Pedals:</h2>
            {pedalArray}

        </div>
    )
    }else{
        return(
            <h1>No user data</h1>
        )
    }

}

export default PedalListItem;