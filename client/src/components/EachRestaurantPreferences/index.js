import {useState} from 'react'
import { useAlert } from 'react-alert'
import {ADD_MATCHES} from '../../utils/mutations'
import { useMutation} from '@apollo/client';
import heart from './images/heart.svg'

export default function RenderEachRestaurantPreferences({userPreferences, id, grabImage, showRestaurants, i, setI}) {
    const [imageState, setImageState] = useState('')
    const [match, setMatch] = useState('')
    const [addMatch] = useMutation(ADD_MATCHES)
    const alert = useAlert()
    
    grabImage(showRestaurants[i].photos[0].photo_reference).then((image) => {
        setImageState(image)
    })

    async function addRestaurantChoosen(placeChoosen, name){
        for(let i = 0; i < userPreferences.length; i++){
            if(userPreferences[i] === placeChoosen){
                alert.show('MATCH! You should go there')
                await addMatch({
                    variables: { _id: id, restaurantMatches: name},
                });
            }
        }
        setI((prevValue) => prevValue + 1)
        setMatch('')
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
                    onClick={() => addRestaurantChoosen(showRestaurants[i].place_id, showRestaurants[i].name)}
                >
                    <img className="card-btn pick" src={heart} alt="heart"/>
                </button>
            </div>

            <div className="info_restaurant_each">
                <h4><strong>Price Level:</strong> {showRestaurants[i].price_level}</h4>
                <h4><strong>Price Level:</strong> {showRestaurants[i].rating}</h4>
                <h4>{showRestaurants[i].vicinity}</h4>
            </div>
            <div>
                {match}
            </div>
        </div>
    );
}