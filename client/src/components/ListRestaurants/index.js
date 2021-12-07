import { useEffect, useState } from "react";
import RenderEachRestaurant from '../EachRestaurantImage/index'

export default function RenderListRestaurants() {
    
    const location = localStorage.getItem('location');
    const cuisine = localStorage.getItem('cuisine')
    const price = localStorage.getItem('price')
    const friend = localStorage.getItem('friend')

    const [showRestaurants, setShowRestaurants] = useState([])
    const [i, setI] = useState(0)

    useEffect(() =>{
        grabData()
    }, [])

    async function grabData() {
        try{
            const response = await fetch(`/api/place/?location=${location}&cuisine=${cuisine}&price=${price}`);
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
            return <RenderEachRestaurant grabImage={grabImage} showRestaurants={showRestaurants} i={i} setI={setI}/>
        }

        if(i === showRestaurants.length){
            setTimeout(() => {
                window.location.replace('/user')
            }, 3000);
            return (
                <>
                    <h3>Your guest recieved your invitation!</h3>
                    <h4>You will be redirected to the user page in 3 seconds</h4>
                </>
            )
        }
    }

    function editionFriends(){
        if(friend === 'brent'){
            return <h3>Are you sure???</h3>
        } else if(friend === 'jon'){
            return <h3>Sounds Amazing!!!!</h3>
        } else if (friend === 'dan'){
            return <h3>Can he bring the baby?</h3>
        } else if (friend === 'fenix'){
            return <h3>I'm sure he will be hungry!!!</h3>
        } else{
            return <h3>Enjoy your meal!!!</h3>
        }
    }
    
    return (
        <section>
            <h3>You are planning a meal with: {friend}</h3>
            {editionFriends()}
            {renderRestaurant()}
        </section>
    );
}