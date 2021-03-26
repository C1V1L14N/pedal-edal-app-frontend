import React, {useEffect} from 'react';
import OwnedPedalsButton from '../Components/OwnedPedalsButton';
import WishListButton from '../Components/WishListButton';
import PedalListItem from '../Components/PedalListItem';
import Loading from '../Components/loading';


const ProfileContainer = ({userData, getUserData}) => {

    useEffect(() => {
        getUserData();
      }, [])

    if (!userData[0]){
        return Loading
    }

    return(
        <div>
            <OwnedPedalsButton/>
            <WishListButton/>
            <ul>
                <PedalListItem  userData={userData}/>
            </ul>
        </div>
    )


}

export default ProfileContainer;