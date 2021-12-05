import './style.css'





export default function RendersoloRestaurant(){
    return (
            <section>   
                <section>
                    {/* <h4>Find Restaurant - Indulge Alone!</h4> */}
                </section>
                    <section className="find_restaurant_solo_card_body">
                        <form>
                            <p>Where would you like to look for restaurants?</p>
                            <input className="form-input" placeholder="Location" name="location" type="location" />
                            <br></br>

                            <p>What type of cuisine would you like to eat?</p>
                            <input className="" placeholder="Cuisine" name="cuisine" type="text" />
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