const express = require('express');
const router = express.Router();
const path = require('path');

const usersController = require("../controllers/users");

router.get("/add-user", usersController.getAddUser);
router.post("/addUser", usersController.postAddUser);

exports.router = router;