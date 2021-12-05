// importing the nav bar to appear when the user is logged in
import RenderNavSignIn from "../NavLogin/index";
import RenderProfileComponent from '../ProfileUser/index'
import RenderProfileInfo from '../ProfileInfo';
import RenderFindRestaurant from '../FindRestaurant/index'
import { QUERY_ME } from '../../utils/queries';
import {useState} from 'react'
import './style.css'
import { useQuery } from '@apollo/client';

export default function RenderProfile() {

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    const [profileComponent, setProfileComponent] = useState('find_restaurant')
    // component that could show the friend, invite and add new friend component
    function renderComponentOnRight(){
        if(profileComponent === 'find_restaurant'){
            return <RenderFindRestaurant/>
        } else if(profileComponent === 'profile_info'){
            return <RenderProfileInfo/>
        } 
    }

    if (!userData?.username) {
        return (
          <h4>
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
          </h4>
        );
    }
    
    return (
        <>
            <RenderNavSignIn/>
            <main className="main_profile">
                <RenderProfileComponent username={userData.username} email={userData.email} setProfileComponent={setProfileComponent}/>
                <br></br>
                {renderComponentOnRight()}   
            </main>
        </>
    );
}