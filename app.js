const express = require("express");
const app = express();
const path = require('path');
const expressHbs = require('express-handlebars');
const adminData = require("./routes/admin");
const shopRouters = require("./routes/shop");


// load body parser for HTML request 
app.use(express.urlencoded({extended: false}));
// load body parser for json 
app.use(express.json());
// set for static file usage like css , image, font dll
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', expressHbs({extname:'hbs', layoutsDir:"views/layouts", defaultLayout: 'main-layout.hbs'}));
// set for global configuration
app.set('view engine','hbs');
app.set('views','views')


app.use("/admin",adminData.router);
app.use(shopRouters);

app.use((req, res, next) => {
    res.status(404).render("404",{pageTitle: 'Not Found'});
})

app.listen(3000);