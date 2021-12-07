import './style.css'
import {useState} from 'react'
import {QUERY_FRIENDS} from '../../utils/queries';
import {CREATE_NEW_MEAL} from '../../utils/mutations'
import { useQuery, useMutation} from '@apollo/client';

export default function RendersoloRestaurant(){
    // Getting the users friends
    const {data: dataFriends} = useQuery(QUERY_FRIENDS)
    const friendsData = dataFriends?.meFriends || {}

    const [createOneMea] = useMutation(CREATE_NEW_MEAL)

    // Setting the default value (values that appear on the page when you loaded)
    const [formState, setFormState] = useState({
        location: [28.5383, -81.3792],
        cuisine: 'American',
        price: '1',
        rating: [2,3,4,5],
        friend: ''
    })

    const locationArray = [
        {
            "name": "Orlando",
            "latitude": 28.5383,
            "longitute": -81.3792
        },
    ]

    const cuisineArray = ["American", "Brazilian", "Cajun", "Creole", "Caribbean", "Chinese", "Danish", "Ethiopian", "French", "Filipino", "German", "Greek", "Indian", "Irish", "Italian", "Jamaican", "Japanese", "Lebanese", "Mediterranean", "Mexican", "Polish", "Persian", "Peruvian", "Portuguese", "Taiwanese", "Thai Turkish", "Vietnamese", "Burgers", "Pizza", "Salad", "Vegetarian", "Vegan", "Steak", "Chicken", "Tacos", "Asians", "Cafe"]

    const priceArray = ['1', '2', '3', '4']

    const minRatingArray = [
        {
            "min": 2,
            "values": [2,3,4,5]
        },
        {
            "min": 3,
            "values": [3,4,5]
        },
        {
            "min": 4,
            "values": [4,5]
        },
        {
            "min": 5,
            "values": [5]
        },
    ]

    async function handleSubmitForm (e){
        e.preventDefault()
        const url = `/api/place/?location=${formState.location}&cuisine=${formState.cuisine}&price=${formState.price}`
        
        try{
            await createOneMea({
                variables: {guestUsername: formState.friend, inputs: url}
            });
            
        }catch(e){
            console.log(e)
        }

        if(formState.friend === ''){
            setFormState({...formState, friend: friendsData.friends[0]})
        }
        localStorage.setItem('location', formState.location);
        localStorage.setItem('cuisine', formState.cuisine)
        localStorage.setItem('price', formState.price)
        localStorage.setItem('rating', formState.rating)
        localStorage.setItem('friend', formState.friend)
        window.location.replace('/restaurants')
    }

    function handleChange(e){
        if(e.target.name === 'location'){
            setFormState({...formState, location: e.target.value})
        } else if(e.target.name === 'cuisine'){
            setFormState({...formState, cuisine: e.target.value})
        } else if(e.target.name === 'price'){
            setFormState({...formState, price: e.target.value})
        } else{
            setFormState({...formState, rating: e.target.value})
        }
    }

    return (
        <>
            {/* <h4>Find Restaurant - Indulge Alone!</h4> */}
            <section className="find_restaurant_solo_card_body">
                <form className="form_invite_restaurant" onSubmit={handleSubmitForm}>
                    <h3>Where would you like to look for restaurants?</h3>
                    <select className="location_select" name='location' onChange={handleChange}>
                        {locationArray.map((location) =>(
                            <option key={location.name} value={[location.latitude, location.longitute]}>{location.name}</option>
                        ))}
                    </select>
                    <br/><br/>

                    <h3>What type of cuisine would you like to eat?</h3>
                    <select className="cuisine_select" name='cuisine' onChange={handleChange}>
                        {cuisineArray.map((cuisine) =>(
                            <option value={cuisine} key={cuisine}>{cuisine}</option>
                        ))}
                    </select>
                    <br/><br/>

                    <h3>What would you like to spend(max price)?</h3>
                    <select className="price_select" name='price' onChange={handleChange}>
                        {priceArray.map((price) =>(
                            <option value={price} key={price}>{price}</option>
                        ))}
                    </select>
                    <br/><br/>

                    <h3>Choose a "friend" to go with</h3>
                    <p>You chose: {formState.friend}</p>
                    <div className="buttons_meal_invite">
                        {friendsData.friends && friendsData.friends.map((friend) =>(
                                <div className="button_invite_meal" onClick={() => setFormState({...formState, friend: friend})} key={friend}>
                                    <h4>{friend}</h4>
                                    <div>+</div>
                                </div>
                        ))}
                    </div>
                    <br></br>
                        <div className="buttons_div_invite">
                            <button className="find_restaurant_button" type="submit">
                                Find Restaurant
                            </button>
                        </div>
                </form>
            </section>
        </>
    );
}