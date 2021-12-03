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
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span class="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span class="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img class="friendImg" src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span class="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span class="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span class="close">x</span>
                            </div>
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
                        <div class="scrollingList">

                            {/* Individual Restaurant */}
                            <div class="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span class="close">x</span>
                                <button class="notes">Add Notes</button>
                            </div>







                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}