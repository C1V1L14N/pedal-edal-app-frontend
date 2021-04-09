import PedalDetailsbutton from './details-button';
import PedalRating from './PedalRating';
import Bullseye from '../Assets/bullseye.png'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const PedalListItem = ({userData}) => {

    
    const pedalArray = userData[0].pedals.map((pedal) => {
        return(
        
            <div id="pedal-container" key={pedal.id}>

                <p className="pedal_name">{pedal.name}</p>
                <p className="pedal_manufacturer">{pedal.manufacturer}</p>
                <img id="pedal-item-image" src={process.env.PUBLIC_URL + pedal.image} height="30em" width="20em"/>
                <PedalRating pedalRating={pedal.rating}/>
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