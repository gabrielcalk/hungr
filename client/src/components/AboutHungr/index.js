import './style.css'
import arrow_circle from './images/arrow_circle.svg'
import photo_restaurant from './images/photo_restaurant.jpg'


// This function renders the About Hungr Section onto the page, this section contains all the steps explaining how to use this application
export default function RenderAbout() {

    const tutorial_info = [
        {
            step: 'Step 1',
            informations: 'Select find a restaurant',
            image: arrow_circle
        },
        {
            step: 'Step 2',
            informations: 'Select your cuisine preferences',
            image: arrow_circle
        },
        {
            step: 'Step 3',
            informations: 'Invite a friend to join you',
            image: arrow_circle
        },
        {
            step: 'Step 4',
            informations: 'Once your friend accepts your request, you will both swipe through list of restaurants curated specifically to your taste!',
            image: arrow_circle
        },
        {
            step: 'Step 5',
            informations: 'View Matches!',
            image: arrow_circle
        },

    ]

    return (
        <section className="about_all_section">
            <section className="section_main_about">
                <h2 className="title_about" id="about_hungr">About Hungr</h2>
                <h3 className="subtitle_about">"I don't know. What do you want?"</h3>
                <p className="info_about">We've all been there. You're hungry, but you're not 
                    quite sure where you'd like to eat. This is where Hungr comes in. 
                    Hungr is designed to help you and your dining companion 
                    find the perfect place to eat in a few simple steps.
                </p>
            </section>
            <section className="section_images_and_steps">
                <section className="section_steps">
                    {tutorial_info.map((info) => 
                        <div key={info.step} className="each_tutorial">
                            <img className="each_arrow_circle" src={info.image} alt="arrow circle"/>
                            <div className="each_info_div">
                                <p className="each_step">{info.step}</p>
                                <p>{info.informations}</p>
                            </div>
                        </div>
                    )}
                </section>
                <section>
                    <img className="self_restaurant" src={photo_restaurant} alt="self in one restaurant"/>
                </section>
            </section>
        </section>
    );
}