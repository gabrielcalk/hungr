const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
    principalUser:{
            type: String,
            required: true
    },
    // this is the dinner guest that is being invited to join
    guestUsername:{
        type: String,
        required: true
    },
    inputs:{
        type: String
    },
    // these are the meal selections that the principal user has chosen at start of selection process
    principalMealPreferences:[{
        type: String,
    }],
    // these are the restaurants that matches all guest preferences-this list is what is common between both the principal user and the guest user after selection process is complete
    restaurantMatches:[{
        type: String,
    }],
    status: {
        type: String
    }
},
    {
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
    }
);

const Meal = model('Meals', mealSchema);

module.exports = Meal;