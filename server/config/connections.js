const Sequelize = require('sequelize');
require('dotenv').config();

//Connecting to the data base
// JAW or MYSQL
let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
        }
    );
}
/**
 * @exports sequelize
 */
module.exports = sequelize