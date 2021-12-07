//passes on models User FriendInvitation and Meal to be added to MongodB
const User = require("./userMongo");
const FriendInvitation = require("./friendlistMongo");
const Meal = require("./mealMongo");


module.exports = { User, FriendInvitation, Meal};