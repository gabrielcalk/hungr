import './style.css';

// Renders the Find Restaurant component onto the screen. This component contains the Invite a friend option as well as the Indulge alone option
export default function RenderFindRestaurant({setProfileComponent}) {

    return (
        <section className="component_right_restaurant">
            <div className="div_title_component_right">
                <h3 className="title_component_right">Find Restaurant</h3>
            </div>
            <section className="options_restaurant">
                <h1>Invite A Friend</h1>
                <button onClick={() => setProfileComponent('find_restaurant_solo')} className="button_invite">Find a Restaurant</button>
            </section>
        </section>
    );
}
