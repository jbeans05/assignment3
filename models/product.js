const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(require.main.filename),
    'data', 
    'products.json'
);

const getProductFormFile = cb =>{
   
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }        
    });
}

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
       getProductFormFile( products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
       });     
    }

    static fetchAll(cb){
       getProductFormFile(cb);
    }
}