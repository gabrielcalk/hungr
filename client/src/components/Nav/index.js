import {Link} from 'react-router-dom'
// Importing the logo
import logo from '../../images/Logo.png'
// Importing the CSS for the navBar
import './style.css'

// Creating the nav bar with the logo, about us and sign in
export default function RenderNavBar() {
    return (
        <nav>
            <a href='/'><img className="logo_hungr" src={logo} alt="hungr logo"/></a>
            <ul>
                {/* <Link to="/about"> */}
                    <li>About Us</li>
                {/* </Link> */}
                {/* <Link to="/SignIn"> */}
                    <li>Sign In</li>
                {/* </Link> */}
            </ul>
        </nav>
    )
};