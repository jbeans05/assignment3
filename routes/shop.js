const express = require('express');
const shopRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

shopRouter.get("/", (req, res, next) =>{
    const users = adminData.users
    res.render('shop',{users: users, pageTitle: 'Shop', activeShop: true,path:'/', isHasUser: users.length > 0 ? true:false});  
});


module.exports = shopRouter;