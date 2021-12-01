// Importing the CSS for the Home
import './style.css'

// importing the foods images
import cake from './images/cake.jpg'
import chicken from './images/chicken.jpg'
import salad from './images/salad.jpg'

// function that render the Home Page except the nav
export default function RenderHome() {
    return (
        <main className="main_home">
            <section className="section_home">
                <h1 className="title">Treat Yourself And Your Friends.</h1>
                <p className="p_home">Can't decide where to eat? With Hungr, you can find 
                    restaurants in your area that you and your 
                    food-loving companions are sure to enjoy.
                </p>
                <section className="button_home_section">
                    <button className="button_join">Join</button>
                    <button className="button_signIn">Sign In</button>
                </section>
            </section>
            <section className="section_home">
                <div className="pic-ctn">
                    <img src={cake} alt="" className="pic"/>
                    <img src={chicken} alt="" className="pic"/>
                    <img src={salad} alt="" className="pic"/>
                </div>
            </section>
        </main>
    )
}