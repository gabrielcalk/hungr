// importing the nav bar to appear when the user is logged in
import RenderNavSignIn from "../NavLogin/index";
import heart from './images/heart.svg'
import bill_gates from './images/bill_gates.jpg'
import './style.css'

export default function RenderProfileUser() {
    return (
        <>
            <RenderNavSignIn/>
            <section className="user_profile">
                <div className="photo_and_info">
                    <img className="photo_user" src={bill_gates} alt='Bill Gates'/>
                    <div className="info_user">
                        <h3>*username*</h3>
                        <h3>*email*</h3>
                    </div>
                </div>
                <section className="itens_profile">
                    <div className="item_profile_user">
                        <img className="heart_icon" src={heart} alt="heart"/>
                        <h4>Find Restaurant</h4>
                    </div>
                    <div className="item_profile_user">
                        <img className="heart_icon" src={heart} alt="heart"/>
                        <h4>Restaurant Request</h4>
                    </div>
                    <div className="item_profile_user">
                        <img className="heart_icon" src={heart} alt="heart"/>
                        <h4>Profile</h4>
                    </div>
                    <div className="item_profile_user">
                        <img className="heart_icon" src={heart} alt="heart"/>
                        <h4>Add Friend</h4>
                    </div>
                    <div className="item_profile_user">
                        <img className="heart_icon" src={heart} alt="heart"/>
                        <h4>Friend Request</h4>
                    </div>
                </section>
            </section>
        </>
    );
}