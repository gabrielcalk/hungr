import RenderProfileComponent from '../ProfileUser/index'
import RenderProfileInfo from '../ProfileInfo';
import RenderFindRestaurant from '../FindRestaurant/index'
import RenderFindRestaurantSolo from '../FindRestaurant_solo'
import { QUERY_ME } from '../../utils/queries';
import {useState} from 'react'
import './style.css'
import { useQuery } from '@apollo/client';

export default function RenderProfile() {

    const {data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    const [profileComponent, setProfileComponent] = useState('find_restaurant')
    // component that could show the friend, invite and add new friend component
    function renderComponentOnRight(){
        if(profileComponent === 'find_restaurant'){
            return <RenderFindRestaurant setProfileComponent={setProfileComponent}/>
        } else if(profileComponent === 'profile_info'){
            return <RenderProfileInfo/>
        }else{
           return <RenderFindRestaurantSolo/>
        }
    }
    
    return (
        <>
            <main className="main_profile">
                <RenderProfileComponent username={userData.username} email={userData.email} setProfileComponent={setProfileComponent}/>
                <br></br>
                {renderComponentOnRight()}   
            </main>
        </>
    );
}