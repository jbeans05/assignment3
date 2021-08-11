const users = [];

exports.getAddUser = (req, res, next) =>{
    res.render('addUser',{
        pageTitle: 'Add User', 
        path:'/admin/add-user', 
        activeAddUser:true,
        userCSS:true
    });
}


exports.postAddUser = (req, res, next) =>{
    users.push({title: req.body.user})
    res.redirect("/") ;  
}


exports.getUser =  (req, res, next) =>{    
    res.render('shop',{
        users: users, 
        pageTitle: 'Shop', 
        activeShop: true,
        path:'/', 
        isHasUser: users.length > 0 ,
        productCSS:true
    });  
}