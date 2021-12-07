import {useState} from 'react'
import {ADD_USER_PREFERENCES} from '../../utils/mutations'
import { useMutation} from '@apollo/client';
import heart from './images/heart.svg'
import './style.css'

export default function RenderEachRestaurant({grabImage, showRestaurants, i, setI}) {
    const [addRestaurant] = useMutation(ADD_USER_PREFERENCES)
    const [imageState, setImageState] = useState('')
    
    grabImage(showRestaurants[i].photos[0].photo_reference).then((image) => {
        setImageState(image)
    })

    async function addRestaurantChoosen(placeChoosen){
        console.log(placeChoosen)
        setI((prevValue) => prevValue + 1)
        console.log(placeChoosen)
        try{
            await addRestaurant({
                variables: { principalMealPreferences: placeChoosen},
            });
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div key={showRestaurants[i].place_id}>
            <h3 className="each_restaurant_name">{showRestaurants[i].name}</h3>
            <div
                className="card"
                style={{
                    backgroundImage: `url(${imageState})`
                }}
            >
                {/* Button to PASS */}
                <button 
                    onClick={() => setI((prevValue) => prevValue + 1)}
                >
                    <img className="card-btn pass" src={heart} alt="heart"/>
                </button>

                {/* Button to LIKE */}
                <button 
                    onClick={() => addRestaurantChoosen(showRestaurants[i].place_id)}
                >
                    <img className="card-btn pick" src={heart} alt="heart"/>
                </button>
            </div>
            <div className="info_restaurant_each">
                <h4><strong>Price Level:</strong> {showRestaurants[i].price_level}</h4>
                <h4><strong>Rating:</strong> {showRestaurants[i].rating}</h4>
                <h4>{showRestaurants[i].vicinity}</h4>
            </div>
        </div>
    );
}