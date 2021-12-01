const express = require('express');
const router = express.Router();
const User = require("./user");
const Friendlist = require("./friendlist");
const Meal = require("./meal");


module.exports = { User, Friendlist, Meal };