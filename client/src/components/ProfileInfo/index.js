import './style.css'
import steve_jobs from './images/steve_jobs.jpeg'
import placeholder_brazilian_steakhouse from './images/placeholder_brazilian_steakhoues.jpeg'


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
                    <br></br>
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
                                <p>Friend Name</p>
                                <button className="remove">Remove</button>
                                <div className="friendImg">
                                    <img className="image_profile" src={steve_jobs} alt='Steve Jobs'/>
                                </div>
                                {/* <span className="close">x</span> */}
                            </div>
                        {/* Individual Friend */}
                            <div className="friendlistCard">

                                {/* Friend Info     */}
                                <p>Friend Name</p>
                                <button className="remove">Remove</button>
                                <div className="friendImg">
                                    <img className="image_profile" src={steve_jobs} alt='Steve Jobs'/>
                                </div>
                                {/* <span className="close">x</span> */}
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
                                <p>Restaurant Name</p>
                                <button className="notes">Add Notes</button>
                                <button className="remove">Remove</button>
                                <div className="friendImg">
                                    <img className="image_profile" src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
                                </div>
                                {/* <span className="close">x</span> */}
                            </div>
                            {/* Individual Restaurant */}
                            <div className="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <p>Restaurant Name</p>
                                <button className="remove">Remove</button>
                                <button className="notes">Add Notes</button>
                                <div className="friendImg">
                                    <img className="image_profile" src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
                                </div>
                                {/* <span className="close">x</span> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}