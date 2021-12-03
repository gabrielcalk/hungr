const { Model, DataTypes } = require("sequelize");







const sequelize = require("../config/connections");

// sequelize user model
class Meal extends Model {}

Meal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // this is the id that will be assigned to the individual meal
        mealID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        // this is the user that starts the meal selection process, the host of the meal
        principalUser:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 100]
            },
        },
        // this is the dinner guest that is being invited to join
        guestUser:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 100]
            },
        },
        // these are the meal selections that the principal user has chosen at start of selection process
        principalMealPreferences:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // these are the meal selections that the guest prefers from the list that the principal user has previously selected
        guestMealPreferences:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // these are the restaurants that matches all guest preferences-this list is what is common between both the principal user and the guest user after selection process is complete
        restaurantMatches:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'meal',
        timestamps: false
    }
);

/**
 * @exports Meal
 */
module.exports = Meal;