import { useEffect, useState} from "react";
import RenderEachRestaurantPreferences from '../EachRestaurantPreferences'

export default function RenderSpecificRestaurantRequest() {
    const [showRestaurants, setShowRestaurants] = useState([])
    const [i, setI] = useState(0)

    useEffect(() =>{
        grabData()
    }, [])

    const inputs = localStorage.getItem('inputs')
    const id = localStorage.getItem('id')
    const userPreferences = localStorage.getItem('principalMealPreferences').split(',')
    console.log(userPreferences)

    async function grabData() {
        try{
            const response = await fetch(inputs);
            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const data = await response.json();
            setShowRestaurants(data.results)

        }catch(e){
            console.log(e)
        }
    }

    async function grabImage(photo_reference){
        try{
            // for loop for each photo reference                
            const response = await fetch(
                `/api/image/?photo_reference=${photo_reference}`
            )
            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const image = await response.json();
            return image

        }catch(e){
            console.log(e)
        }
        
    }

    function renderRestaurant(){
        while(i < showRestaurants.length){
            return <RenderEachRestaurantPreferences userPreferences={userPreferences} id={id} grabImage={grabImage} showRestaurants={showRestaurants} i={i} setI={setI}/>
        }
    }

    return (
        <div>
            {renderRestaurant()}
        </div>
    );
}
