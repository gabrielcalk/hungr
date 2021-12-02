
import RenderProfileInfo from '../ProfileInfo';

import RenderProfileComponent from '../ProfileUser/index'
import {useState} from 'react'


export default function RenderProfile() {
    const [profileComponent, setProfileComponent] = useState('find_restaurant')
    // component that could show the friend, invite and add new friend component
    const [profileBarComponent, setProfileBarComponent] = useState('')
    
    return (
        <>

            <RenderProfileUser/>   

            
            <RenderProfileInfo/>   

            <RenderProfileComponent profileBarComponent={profileBarComponent} setProfileBarComponent={setProfileBarComponent} setProfileComponent={setProfileComponent}/>   
        </>
    );
}