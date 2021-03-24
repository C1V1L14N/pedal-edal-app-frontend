import PedalDetailsbutton from './details-button';
import PedalRating from './PedalRating';

const PedalListItem = ({userData}) => {

    if(userData[0]){
        userData[0].pedals.forEach(pedal => {
            console.log(`${userData[0].name}'s pedals: ${pedal.name}`);
            return(
                <div>
                <h2>{pedal.name}</h2>
                <h3>DAFUK</h3>
                </div>
            )
        });
    }

    if (userData[0]){
    return(
        <div id="list-item">

            <h1>{userData[0].name}</h1>
            <img></img>
            <PedalRating/>

        </div>
    )
    }else{
        return(
            <h1>No user data</h1>
        )
    }

}

export default PedalListItem;