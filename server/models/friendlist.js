const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");



// sequelize user model
class Friendlist extends Model {}

Friendlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // this is the id of the currently logged in user
        currentUserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        // this is the username of the currently logged in user
        currentUsername:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 100]
            },
        },
        // this is the id of the friend sending the friend request
        friendUserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // this is the username of the friend sending the friend request
  //      friendUsername:{
  //          type:DataTypes.STRING,
   //         allowNull: false,
     //       validate: {
       //         len: [4, 100]
         //   },
       // },
        // this is the status of the friendrequest
        friendRequestStatus:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'friendlist',
        timestamps: false,
    }
);

/**
 * @exports Friendlist
 */
module.exports = Friendlist;