const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connections");

// sequelize user model
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 100]
            },
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 100]
            },
        },
        favorite_restaurants: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        hooks:{
            beforeCreate: async (userPassword) => {
                userPassword.password = await bcrypt.hash(userPassword.password, 10);
                return userPassword
            },
        },
        sequelize,
        modelName: 'user',
        timestamps: false,
        underscored: true
    }
);

/**
 * @exports User
 */
module.exports = User;