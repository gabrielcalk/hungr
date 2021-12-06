import './style.css';
import RenderFindRestaurantSolo from '../FindRestaurant_solo'
import RenderFindRestaurantFriend from '../FindRestaurant_friend'
import {useState} from 'react'


export default function RenderFindRestaurant({setProfileComponent}) {

    return (
        <section className="component_right_restaurant">
            <div className="div_title_component_right">
                <h3 className="title_component_right">Find Restaurant</h3>
            </div>
            <section className="options_restaurant">
                <h1>Invite A Friend</h1>
                <button onClick={() => setProfileComponent('find_restaurant_friend')} className="button_invite">Restaurant Request</button>

                <h1 className="or_invite"><span>Or</span></h1>

                <h1>Indulge Alone</h1>
                <button onClick={() => setProfileComponent('find_restaurant_solo')} className="button_invite">Find a Restaurant</button>
            </section>
        </section>
    );
}
