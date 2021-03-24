import pedalDetailsbutton from './components/PedalDetailsbutton';
import pedalRating from './components/PedalRating';

function pedalListItem({user}) {

    return(
        <div id="list-item">

            <h3>{userData[0].name}</h3>
            <img></img>
            <pedalRating/>

        </div>
    )

}

export default pedalListItem;