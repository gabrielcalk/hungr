import './style.css'
import steve_jobs from './images/steve_jobs.jpg'


export default function RenderProfileInfo() {
    return (
        <>
            {/* Account Info page Component */}
            <div className="profile_info">

                {/* User Personal Account Info Box*/}
                <div className="accountInfo">

                    {/* Account Title */}
                    <div className="sectionTitle">
                    <h2>Account</h2>
                    </div>
        
                    {/* Account Info */}
                    <div>
                        <button className="edit">Edit</button>
                            <div className="nameEmail">
                                <p>Username:</p>
                                <p>Email:</p>
                            </div>
                    </div>

                </div>

                {/* User's Friendlist Section */}
                <section className="section_friends">
                    <div className="friendlist">

                    {/* Friendlist Title */}
                        <div className="sectionTitle">
                            <h2>Friends</h2>
                        </div>

                    {/* Scrolling list */}
                        <div className="scrollingList">

                        {/* Individual Friend */}
                            <div className="friendlistCard">

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img className="friendImg" src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>
                            <div>

                                {/* Friend Info     */}
                                <img src={steve_jobs} alt='Steve Jobs'/>
                                <h3>FriendName</h3>
                                <span className="close">x</span>
                            </div>










                        </div>
                    </div>

                {/* User's Favorite Restaurant Section */}
                    <div className="favoritesList">

                    {/* Favorites Title */}
                        <div className="sectionTitle">
                            <h2>Favorites</h2>
                        </div>

                    {/* Scrolling list */}
                        <div className="scrollingList">

                            {/* Individual Restaurant */}
                            <div className="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>
                            {/* Individual Restaurant */}
                            <div>

                                {/* Restaurant Info*/}
                                <h3>RestaurantName</h3>
                                <span className="close">x</span>
                                <button className="notes">Add Notes</button>
                            </div>







                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}