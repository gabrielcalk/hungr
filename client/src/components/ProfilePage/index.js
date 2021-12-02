// importing the nav bar to appear when the user is logged in
import RenderNavSignIn from "../NavLogin/index";
import RenderProfileComponent from '../ProfileUser/index'
import RenderProfileInfo from '../ProfileInfo';
import RenderFindRestaurant from '../FindRestaurant/index'
import {useState} from 'react'
import './style.css'

export default function RenderProfile() {
    const [profileComponent, setProfileComponent] = useState('find_restaurant')
    // component that could show the friend, invite and add new friend component
    function renderComponentOnRight(){
        if(profileComponent === 'find_restaurant'){
            return <RenderFindRestaurant/>
        } else if(profileComponent === 'profile_info'){
            return <RenderProfileInfo/>
        }
    }
    
    return (
        <>
            <RenderNavSignIn/>
            <main className="main_profile">
                <RenderProfileComponent setProfileComponent={setProfileComponent}/>
                {renderComponentOnRight()}   
            </main>
        </>
    );
}