// importing the nav bar to appear when the user is logged in
import RenderNavSignIn from "../NavLogin/index";
// import heart from './images/heart.svg'
import './style.css'
import steve_jobs from './images/steve_jobs.jpg'


export default function RenderProfileInfo() {
    return (
        <>
            {/* Account Info page Component */}
            <div className="profile_info">

                {/* User Personal Account Info Box*/}
                <div class="accountInfo">

                    {/* Account Title */}
                    <div class="sectionTitle">
                    <h2>Account</h2>
                    </div>
        
                    {/* Account Info */}
                    <div>
                        <h3>Username:</h3>
                        <h3>Email:</h3>
                        <button class="edit">Edit</button>
                    </div>

                </div>

                {/* User's Friendlist Section */}
                <div class="friendlist">

                    {/* Friendlist Title */}
                    <div class="sectionTitle">
                    <h2>Friends</h2>
                    </div>

                    {/* Scrolling list */}
                    <div>

                        {/* Individual Friend */}
                        <div>

                            {/* Friend Info     */}
                            <img src={steve_jobs} alt='Steve Jobs'/>
                            <h3>FriendName</h3>
                            <span class="close">x</span>
                        </div>
                    </div>
                </div>

                {/* User's Favorite Restaurant Section */}
                <div class="favoritesList">

                    {/* Favorites Title */}
                    <div class="sectionTitle">
                    <h2>Favorites</h2>
                    </div>

                    {/* Scrolling list */}
                    <div>

                        {/* Individual Friend */}
                        <div>

                            {/* Restaurant Info*/}
                            <h3>RestaurantName</h3>
                            <span class="close">x</span>
                            <button class="notes">Add Notes</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}