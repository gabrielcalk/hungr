import bill_gates from './images/bill_gates.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './style.css'


import RenderFriendRequest from '../Friend_request/index';
import RenderAddFriend from '../Add_friend/index';
import RenderRestaurantRequest from '../Restaurants_request/index';

export default function RenderProfileComponent({setProfileComponent, profileBarComponent, setProfileBarComponent}) {
    
    return (
        <>
            <section className="user_profile">
                <div className="photo_and_info">
                    <img className="photo_user" src={bill_gates} alt='Bill Gates'/>
                    <div className="info_user">
                        <h3>*username*</h3>
                        <h3>*email*</h3>
                    </div>
                </div>
                <section className="itens_profile">
                    <div onClick={() => setProfileComponent('find_restaurant')} className="item_profile_user">
                        <FavoriteIcon className='heart_icon' color="action"/>
                        <h4>Find Restaurant</h4>
                    </div>
                    <div onClick={() => setProfileComponent('profile_info')} className="item_profile_user">
                        <FavoriteIcon className='heart_icon' color="action"/> 
                        <h4>Profile</h4>
                    </div>
                    <RenderRestaurantRequest/>
                    <RenderAddFriend/>
                    <RenderFriendRequest/>
                </section>
            </section>
        </>
    );
}