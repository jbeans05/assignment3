const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const users = [];

router.get("/users", (req, res, next) =>{
    res.send("<h1>ini halaman Users</h1>");     
});

router.get("/add-user", (req, res, next) =>{
    res.render('addUser',{pageTitle: 'Add User', path:'/admin/add-user', activeAddUser:true});
});

router.post("/addUser", (req, res, next) =>{
    users.push({title: req.body.user})
    res.redirect("/") ;  
});


exports.router = router;
exports.users = users 