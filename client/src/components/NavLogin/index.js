import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

// If the user is logged in, then we will display this navbar components
export default function RenderNavSignIn() {
    return (
        <nav>
            <a href='/'><img className="logo_hungr" src={logo} alt="hungr logo"/></a>
            <ul>
                <Link to="/user">
                    <li>Profile</li>
                </Link>
                    <li onClick={Auth.logout}>Sign Out</li>
            </ul>
        </nav>
    );
}