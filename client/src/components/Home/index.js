// Importing the CSS for the Home
import './style.css'
import {useState} from 'react'
// importing the foods images
import cake from '../Home/images/cake.jpg'
import chicken from '../Home/images/chicken.jpg'
import salad from '../Home/images/salad.jpg'

// importing the components that could be display on the page
import RenderInfo from '../infoHome/index'
import RenderJoin from '../Join/index'
import RenderSignIn from '../SignIn/index'
import RenderButtonToSignIn from '../ButtonToSignIn/index'


// function that render the Home Page except the nav
export default function RenderHome() {
    // Creating one state to change the components (info/signin/join)
    // The default value is info_component, that means the component with the title, information and the buttons will be render first
    const [componentHome, setcomponentHome] = useState('info_component')

    function renderComponentHome(){
        // if componentHome is "info_component", then render the component with the info, title and buttons
        if(componentHome === 'info_component'){
            return <RenderInfo setcomponentHome={setcomponentHome}/>
        // if componentHome is "join_component", then render the component with the join questions
        } else if(componentHome === 'join_component'){
            return <RenderJoin/>
        // if componentHome is "signup_component", then render the component with the signIn questions
        } else if (componentHome === 'signin_component'){
            return <RenderSignIn/>
        // if componentHome is "about_component", then render the component with the About Hungr component
        } else{
            return <RenderButtonToSignIn/>
        }
    }

    return (
        <>
{/* We need to display different navigation bars based on whether the user is logged in or not.*/}     
           
            <main className="main_home">
                {renderComponentHome()}
                <div className="pic-ctn">
                        <img src={cake} alt="" className="pic"/>
                        <img src={chicken} alt="" className="pic"/>
                        <img src={salad} alt="" className="pic"/>
                </div>
            </main>
        </>
    )
}