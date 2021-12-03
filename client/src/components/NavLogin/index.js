import logo from '../../images/Logo.png'

// If the user is logged in, then we will display this navbar components
export default function RenderNavSignIn() {
    return (
        <nav>
            <a href='/'><img className="logo_hungr" src={logo} alt="hungr logo"/></a>
            <ul>
                {/* <Link to="/SignIn"> */}
                    <li>Profile</li>
                    <li>Sign Out</li>
                {/* </Link> */}
            </ul>
        </nav>
    );
}