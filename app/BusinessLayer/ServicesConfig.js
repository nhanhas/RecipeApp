var express    = require('express');        // call express
var app        = express();                 // define our app using express


//All Modules API loaded here
var recipe = require('./Recipe/RecipeAPI');
var product = require('./Product/ProductAPI');


//Register all API-Module Routes here
app.use('/api', recipe); //Recipe API
app.use('/api', product); //Product API



module.exports = app;