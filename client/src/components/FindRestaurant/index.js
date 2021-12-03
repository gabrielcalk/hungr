import './style.css'

export default function RenderFindRestaurant() {
    return (
        <section className="component_right_restaurant">
            <div className="div_title_component_right">
                <h3 className="title_component_right">Find Restaurant</h3>
            </div>
            <section className="options_restaurant">
                <h1>Invite A Friend</h1>
                <button className="button_invite">Restaurant Request</button>

                <h1 className="or_invite">----- Or -----</h1>

                <h1>Indulge Alone</h1>
                <button className="button_invite">Find a Restaurant</button>
            </section>
        </section>
    );
}
