// importing the foods images
import cake from '../Home/images/cake.jpg'
import chicken from '../Home/images/chicken.jpg'
import salad from '../Home/images/salad.jpg'




export default function renderInfo({setcomponentHome}) {
    return (
        <section className="section_home">
            <div>
            <h1 className="title">Treat Yourself And Your Friends.</h1>
            <p className="p_home">Can't decide where to eat? With Hungr, you can find 
                restaurants in your area that you and your 
                food-loving companions are sure to enjoy.
            </p>
            <section className="button_home_section">
                {/* On click we are changing the componentHome variable to display the component on the page*/}
                <button onClick={() => setcomponentHome('join_component')} className="button_join">Join</button>
                <button onClick={() => setcomponentHome('signin_component')} className="button_signIn">Sign In</button>
            </section>
            </div>
            <div className="section_home">
                    <div className="pic-ctn">
                        <img src={cake} alt="" className="pic"/>
                        <img src={chicken} alt="" className="pic"/>
                        <img src={salad} alt="" className="pic"/>
                    </div>
                </div>
        </section>
        
    )
}
