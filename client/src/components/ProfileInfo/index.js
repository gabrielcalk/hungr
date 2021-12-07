import './style.css'
import steve_jobs from './images/steve_jobs.jpeg'
import placeholder_brazilian_steakhouse from './images/placeholder_brazilian_steakhoues.jpeg'
import { useQuery, useMutation } from '@apollo/client';
import {QUERY_FRIENDS} from '../../utils/queries';
import {DELETE_FRIEND} from '../../utils/mutations'

export default function RenderProfileInfo() {
        // Getting the friends
        const {data: dataFriends} = useQuery(QUERY_FRIENDS)
        const friendsData = dataFriends?.meFriends || {}

        const [deleteFriend] = useMutation(DELETE_FRIEND)

        async function handleDeleteFriend(friendUsername){
            try{
                await deleteFriend({
                    variables: {friendUsername}
                })
                window.location.replace('/user')
            }catch(e){
                console.erro(e)
            }
        }

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
                            {friendsData.friends ? friendsData.friends.map((friend) => {
                                return(
                                <div key={friend} className="friendlistCard">
                                    {/* Friend Info     */}
                                    <p>{friend}</p>
                                    <button className="remove" onClick={() => handleDeleteFriend(friend)}>Remove</button>
                                    <div >
                                        <img className="friendListImg" src={steve_jobs} alt={friend}/>
                                    </div>
                                </div>
                                )
                            }): 
                            <div className="friendlistCard">
                            {/* Friend Info*/}
                                <p>No Friends Were Found</p>
                            </div>
                            }
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
                                <div >
                                    <img className="friendListImg" src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
                                </div>
                                {/* <span className="close">x</span> */}
                            </div>
                            {/* Individual Restaurant */}
                            <div className="favoriteslistCard">

                                {/* Restaurant Info*/}
                                <p>Restaurant Name</p>
                                <button className="remove">Remove</button>
                                <button className="notes">Add Notes</button>
                                <div>
                                    <img className="friendListImg" src={placeholder_brazilian_steakhouse} alt='placeholder_brazilian_steakhouse'/>
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