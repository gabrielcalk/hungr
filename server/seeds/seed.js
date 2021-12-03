const sequelize = require("../config/connections");
const { User } = require("../models");

const userSeedData = require("./userSeedData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDataBase();
