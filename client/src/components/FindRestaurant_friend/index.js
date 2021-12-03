import './style.css'

import RenderFindRestaurant from '../FindRestaurant'



export default function RenderfriendRestaurant(){
    return (
            <section>
                <section>   
                <h4>Find Restaurant - Indulge With A find_restaurant_friend_card_body!</h4>
                </section> 
                    <section className="find_restaurant_solo_card_body">
                   <form>
                   <p>Where would you like to look for restaurants?</p>
                    <input className="form-input"placeholder="Location"
                    name="location" type="location" />
                    <br></br>
                    <p>What type of cuisine would you like to eat?</p>
                    <input className="" placeholder="Cuisine" name="cuisine" type="text" />
                    <br></br>
                    <p>Who would you like to invite</p>
                    <input className="" placeholder="Friend from Friends List" name="friend" type="text" />
                    <br></br>

                    <p>What would you like to spend?</p>
                    <input className="form-input" placeholder="Meal Budget" name="budget" type="text" />
                    <br></br>

                    <p>Minimum Restaurant Rating?</p>
                    <input className="form-input" placeholder="Select Rating" name="rating" type="text" />
                    <br></br>
                    <button className="find_restaurant_button" type="submit">
                    Find Restaurant
                    </button>
                
                   </form>
                </section>                         
            </section>
    );
}