import PedalDetailsbutton from './details-button';
import PedalRating from './PedalRating';
import Bullseye from '../Assets/bullseye.png'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const PedalListItem = ({userData}) => {

    
    const pedalArray = userData[0].pedals.map((pedal) => {
        return(
        
            <div id="pedal-container" key={pedal.id}>
                <p className="pedal_name">Name: {pedal.name} </p>
                <p className="pedal_category">Category: {pedal.pedalCategory}</p>
                <p className="pedal_type">Effect Type: {pedal.effectType} </p>
                <PedalRating pedalRating={pedal.rating}/>
                <img></img>
                <Link id="pedal-detail-link" to="/pedal-detail"><img id="pedal-detail-link-img" src={Bullseye}></img></Link>
            </div>
        
        
        )})

    if (userData[0]){
    return(
        <div id="profile-title">
            
            <h1>{userData[0].name}</h1>
            <h2>Pedals:</h2>
            <div id="pedal-array">
                {pedalArray}
            </div>

        </div>
    )
    }else{
        return(
            <h1>No user data</h1>
        )
    }

}

export default PedalListItem;