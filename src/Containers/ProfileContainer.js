import OwnedPedalsButton from '../Components/OwnedPedalsButton';
import WishListButton from '../Components/WishListButton';
import PedalListItem from '../Components/PedalListItem';


const ProfileContainer = ({userData}) => {

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