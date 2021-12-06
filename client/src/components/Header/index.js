import {Link} from 'react-router-dom'
// Importing the logo
import logo from '../../images/Logo.png'
// Importing the CSS for the navBar
import '../../style.css'
import '../../app.css'

import Auth from '../../utils/auth'

// Creating the nav bar with the logo, about us and sign in
const Header = () => {
    return (
        <header className="text-light py-3 flex-row align-center">
          <div className="container flex-row justify-space-between-sm align-center">
            <nav className="col-md-12 nav navbar-expand-lg p-3 nav-wrapper">
                <Link className="navItem" to="/">
                <img className="logoHungr" src={logo} alt="hungr Logo"></img>
                </Link>
                <div class="collapse navbar-collapse justify-content-end" id="mynav">
                  {Auth.loggedIn() ? (
                    <>
                    <ul>
                      <Link className="navItem" to="/user">
                      <li>Profile</li>
                      </Link>
                      <Link className="navItem" to="/">
                      <li>Find Restaurant</li>
                      </Link>
                      <Link className="navItem" onClick={Auth.logout}>
                      <li>Sign Out</li>
                      </Link>
                    </ul>
                    </>
                  ) : (
                    <>
                    <ul>
                     <Link className="navItem" href="#About">
                      <li>About</li>
                      </Link>
                      <Link className="navItem" to="/Join">
                      <li>Join</li>
                      </Link>
                      <Link className="navItem" to="/signin">
                      <li>Sign In</li>
                      </Link>
                    </ul>
                    </>
                  )}
                </div>
            </nav>
          </div>
        </header>
      );
    };
    
    
    
export default Header;