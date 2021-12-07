import {Link} from 'react-router-dom'
import './style.css'




export default function renderInfo({setcomponentHome}) {
    return (
        <section className="grid-box section_home">
            <div className="">
            <h1 className="title">Treat Yourself And Your Friends.</h1>
            <p className="p_home">Can't decide where to eat? With Hungr, you can find 
                restaurants in your area that you and your 
                food-loving companions are sure to enjoy.
            </p>
            <section className="button_home_section">
                {/* On click we are changing the componentHome variable to display the component on the page*/}
                <Link className="navItem" to="/join">
                <button onClick={() => setcomponentHome('join_component')} className="button_join">Join</button>
                </Link>
                
                <Link className="navItem" to="/signin">
                    <button onClick={() => setcomponentHome('signin_component')} className="button_signIn">Sign In</button>
                </Link>
            </section>
            </div>
        </section>
        
    )
}
