import React, {useEffect} from 'react';
import OwnedPedalsButton from '../Components/OwnedPedalsButton';
import WishListButton from '../Components/WishListButton';
import PedalListItem from '../Components/PedalListItem';
import Loading from '../Components/loading';
import '../Style/desktop.css';


const ProfileContainer = ({userData, getUserData, setSaved}) => {

    useEffect(() => {
        getUserData();
        setSaved(false);
    }, [])

    if (!userData[0]){
        return Loading
    }

    return(
        <div id="profile-container">
            <OwnedPedalsButton/>
            <WishListButton/>
            <ul id="pedal-list">
                <PedalListItem userData={userData}/>
            </ul>
        </div>
    )


}

export default ProfileContainer;