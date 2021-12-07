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
                                <p>No Friends Were Found</p>
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
                                        <h4 className="favorite_couple_friend">Friends/Couple: <br/><strong>{match.guestUsername} and {match.principalUser}</strong></h4>
                                        <div>
                                            <h4 className="favorite_couple_friend">Restaurants(match): </h4>
                                            <select className="option_restaurant_match">
                                            {match.restaurantMatches.map((restaurant) =>{
                                                return <option>{restaurant}</option>
                                            })}
                                            </select>
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