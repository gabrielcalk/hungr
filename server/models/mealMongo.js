const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
    principalUser:{
        type: Number,
        required: true,
        maxlength: 70
    },
    // this is the dinner guest that is being invited to join
    guestUser_id:{
        type: Number,
        required: true,
        maxlength: 70
    },
    // these are the meal selections that the principal user has chosen at start of selection process
    principalMealPreferences:{
        type: String,
        required: true,
    },
    // these are the meal selections that the guest prefers from the list that the principal user has previously selected
    guestMealPreferences:{
        type: String,
    },
    // these are the restaurants that matches all guest preferences-this list is what is common between both the principal user and the guest user after selection process is complete
    restaurantMatches:{
        type: String,
    },
});

const Meal = model('Meals', mealSchema);

module.exports = Meal;