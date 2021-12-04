import {Link} from 'react-router-dom'
// Importing the logo
import logo from '../../images/Logo.png'
// Importing the CSS for the navBar
import './style.css'

// Creating the nav bar with the logo, about us and sign in
export default function RenderNavBar({setcomponentHome}) {
    return (
        <nav>
            <a href='/'><img className="logo_hungr" src={logo} alt="hungr logo"/></a>
            <ul>
                {/* <Link to="/about"> */}
                    <li  onClick={() => setcomponentHome('about_component')}>About Hungr</li>
                {/* </Link> */}
                {/* <Link to="/SignIn"> */}
                    <li onClick={() => setcomponentHome('signin_component')}>Sign In</li>
                {/* </Link> */}
            </ul>
        </nav>
    )
};