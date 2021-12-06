import {useState} from 'react'
import {ADD_USER_PREFERENCS} from '../../utils/mutations'
import { useMutation} from '@apollo/client';

export default function RenderEachRestaurant({grabImage, showRestaurants, i, setI}) {
    const [addRestaurant] = useMutation(ADD_USER_PREFERENCS)
    const [imageState, setImageState] = useState('')
    
    grabImage(showRestaurants[i].photos[0].photo_reference).then((image) => {
        setImageState(image)
    })

    async function addRestaurantChoosen(placeChoosen){
        setI((prevValue) => prevValue + 1)
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
            <h3>{showRestaurants[i].name}</h3>
            <img src={imageState} alt={showRestaurants[i].name}/>
            <div>
                <h4>Price Level: {showRestaurants[i].price_level}</h4>
                <h4>Rating: {showRestaurants[i].rating}</h4>
                <h4>{showRestaurants[i].vicinity}</h4>
            </div>
            <button onClick={() => setI((prevValue) => prevValue + 1)}>No</button>
            <button onClick={() => addRestaurantChoosen(showRestaurants[i].place_id)}>Yes</button>
        </div>
    );
}