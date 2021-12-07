import './style.css'
import { useQuery, useMutation } from '@apollo/client';
import {QUERY_FRIENDS, QUERY_DATES_ACCEPT} from '../../utils/queries';
import {DELETE_FRIEND} from '../../utils/mutations'

export default function RenderProfileInfo() {
        // Getting the friends
        const {data: dataFriends} = useQuery(QUERY_FRIENDS)
        const friendsData = dataFriends?.meFriends || {}

        const {data: dataDate} = useQuery(QUERY_DATES_ACCEPT)
        const datesData = dataDate?.meDates || {}
        console.log(datesData)

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
                                    <div >
                                        <p className="pictures_coming_soon">Pictures coming soon...</p>
                                    </div>
                                    <p>Username: {friend}</p>
                                    <button className="remove" onClick={() => handleDeleteFriend(friend)}>Remove</button>
                                </div>
                                )
                            }): 
                            <div className="friendlistCard">
                            {/* Friend Info*/}
                                <p>Friends were not found</p>
                            </div>
                            }
                        </div>
                    </div>
                </section>
                {/* User's Favorite Restaurant Section */}
                    <div className="favoritesList">
                    {/* Favorites Title */}
                        <div className="sectionTitle">
                            <h2>Dates</h2>
                        </div>

                    {/* Scrolling list */}
                        <div className="scrollingList">

                            {/* Individual Restaurant */}
                            {datesData.length > 0 ? datesData.map((match) =>{
                                return (
                                    <div className="favoriteslistCard">
                                        <p>Restaurant Name</p>
                                        <div>
                                            <h4>{match.guestUsername}</h4>
                                            <h4>{match.principalUser}</h4>
                                            <ul>
                                            {match.restaurantMatches.map((restaurant) =>{
                                                return <li>{restaurant}</li>
                                            })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }):                             
                            <div className="friendlistCard">
                            {/* Friend Info*/}
                                <p>Dates were not found</p>
                            </div>
                            }
                        </div>
                    </div>
            </div>
        </>
    );
}