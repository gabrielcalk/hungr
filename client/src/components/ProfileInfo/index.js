import './style.css'
import steve_jobs from './images/steve_jobs.jpeg'
import placeholder_brazilian_steakhouse from './images/placeholder_brazilian_steakhoues.jpeg'


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
                    <br></br>
                    {/* Account Info */}
                    <div>
                        <button class="edit">Edit</button>
                            <div class="nameEmail">
                                <p>Username:</p>
                                <p>Email:</p>
                            </div>
                    </div>

                </div>

                {/* User's Friendlist Section */}
                <section className="section_friends">
                    <div class="friendlist">

                    {/* Friendlist Title */}
                        <div class="sectionTitle">
                            <h2>Friends</h2>
                        </div>

                    {/* Scrolling list */}
                        <div class="scrollingList">

                        {/* Individual Friend */}
                            <div class="friendlistCard">

                                {/* Friend Info     */}
                                <p>Friend Name</p>
                                <button class="remove">Remove</button>
                                <div class="friendImg">
                                    <img src={steve_jobs} alt='Steve Jobs'/>
                                </div>
                                {/* <span class="close">x</span> */}
                            </div>
                        {/* Individual Friend */}
                            <div class="friendlistCard">

                                {/* Friend Info     */}
                                <p>Friend Name</p>
                                <button class="remove">Remove</button>
                                <div class="friendImg">
                                    <img src={steve_jobs} alt='Steve Jobs'/>
                                </div>
                                {/* <span class="close">x</span> */}
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
                        <div class="scrollingList">

                            {/* Individual Restaurant */}
                            <div class="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <p>Restaurant Name</p>
                                <button class="notes">Add Notes</button>
                                <button class="remove">Remove</button>
                                <div class="friendImg">
                                    <img src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
                                </div>
                                {/* <span class="close">x</span> */}
                            </div>
                            {/* Individual Restaurant */}
                            <div class="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <p>Restaurant Name</p>
                                <button class="remove">Remove</button>
                                <button class="notes">Add Notes</button>
                                <div class="friendImg">
                                    <img src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
                                </div>
                                {/* <span class="close">x</span> */}
                            </div>








                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}