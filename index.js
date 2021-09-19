const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const port = 9000;
const app = express();
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){console.log("error in running the server") };
     return console.log('server is running on the port',port ) ;

});