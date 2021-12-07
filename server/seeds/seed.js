const db = require('../config/connectionsMongo.js');
const { User } = require("../models");
const userSeedData = require('./userSeedData.json');

db.once('open', async () => {
  try {
    await User.create(userSeedData)
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
