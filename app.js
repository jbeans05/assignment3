const express = require("express");
const app = express();
const path = require('path');
const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");
const errorHandling = require("./controllers/error")


// load body parser for HTML request 
app.use(express.urlencoded({extended: false}));
// load body parser for json 
app.use(express.json());
// set for static file usage like css , image, font dll
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views','views')


app.use("/admin",adminRoutes.router);
app.use(shopRouters);

app.use(errorHandling.get404);

app.listen(3000);