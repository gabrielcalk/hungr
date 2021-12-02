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
                <div>
                    <img src={bill_gates} alt='Bill Gates'/>
                    <h3>*username*</h3>
                    <h3>*email*</h3>
                </div>
                <section>
                    <div className="item_profile_user">
                        <img src={heart} alt="heart"/>
                        <h4>Find Restaurant</h4>
                    </div>
                    <div className="item_profile_user">
                        <img src={heart} alt="heart"/>
                        <h4>Restaurant Request</h4>
                    </div>
                    <div className="item_profile_user">
                        <img src={heart} alt="heart"/>
                        <h4>Profile</h4>
                    </div>
                    <div className="item_profile_user">
                        <img src={heart} alt="heart"/>
                        <h4>Add Friend</h4>
                    </div>
                    <div className="item_profile_user">
                        <img src={heart} alt="heart"/>
                        <h4>Friend Request</h4>
                    </div>
                </section>
            </section>
        </>
    );
}