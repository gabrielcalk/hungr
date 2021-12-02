const sequelize = require('../config/connections');
const { User } = require('../models');

const userSeedData = require('./userSeedData.son');

const seedDataBase = async () => {
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
}

seedDataBase();