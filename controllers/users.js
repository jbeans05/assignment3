const Product = require('../models/product');

exports.getAddUser = (req, res, next) =>{
    res.render('addUser',{
        pageTitle: 'Add User', 
        path:'/admin/add-user', 
        activeAddUser:true,
        userCSS:true
    });
}


exports.postAddUser = (req, res, next) =>{
    const product = new Product(req.body.user);
    product.save();
    res.redirect("/") ;  
}


exports.getUser =  (req, res, next) =>{   
    Product.fetchAll((products) =>{
        res.render('shop',{
            users: products, 
            pageTitle: 'Shop', 
            activeShop: true,
            path:'/', 
            isHasUser: products.length > 0 ,
            productCSS:true
        });  
    }); 
    
}