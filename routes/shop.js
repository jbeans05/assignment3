const express = require('express');
const shopRouter = express.Router();
const path = require('path');
const usersController = require("../controllers/users")

shopRouter.get("/", usersController.getUser);


module.exports = shopRouter;