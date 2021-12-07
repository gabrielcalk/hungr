import {useState} from 'react'
import { useAlert } from 'react-alert'
import {ADD_MATCHES} from '../../utils/mutations'
import { useMutation} from '@apollo/client';

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
            <h3>{showRestaurants[i].name}</h3>
            <img src={imageState} alt={showRestaurants[i].name}/>
            <div>
                <h4>Price Level: {showRestaurants[i].price_level}</h4>
                <h4>Rating: {showRestaurants[i].rating}</h4>
                <h4>{showRestaurants[i].vicinity}</h4>
            </div>
            <button onClick={() => setI((prevValue) => prevValue + 1)}>No</button>
            <button onClick={() => addRestaurantChoosen(showRestaurants[i].place_id, showRestaurants[i].name)}>Yes</button>
            <div>
                {match}
            </div>
        </div>
    );
}