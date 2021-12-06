import { useEffect } from "react";

export default function RenderListRestaurants() {
    const location = localStorage.getItem('location');
    const cuisine = localStorage.getItem('cuisine')
    const price = localStorage.getItem('price')
    const rating = localStorage.getItem('rating')
    const friend = localStorage.getItem('friend')

    useEffect(() =>{
        grabData()
    }, [])

    async function grabData() {
        try{
            const response = await fetch(
                `/api/?location=${location}&cuisine=${cuisine}&price=${price}`
            );
            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const data = await response.json();

            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <div>
            Funcionando...
        </div>
    );
}