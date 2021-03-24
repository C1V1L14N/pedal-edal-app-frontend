import ownedPedalsButton from './components/OwnedPedalsButton';
import wishListButton from './components/WishListButton';
import pedalListItem from './components/PedalListItem';


function profileContainer({user}) {

    return(
        <div>
            <ownedPedalsButton/>
            <wishListButton/>
            <ul>
                <pedalListItem user={user}/>
            </ul>
        </div>
    )


}

export default profileContainer;