// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var router = express.Router();

//Load VOs
var Recipe = require('./Recipe');
var RecipeProduct = require('./RecipeProduct');
var Product = require('../Product/Product');


// =============================================API ROUTES=====================================================
// more routes for our API will happen here

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Recipe API was Called ...');
    next(); // make sure we go to the next routes and don't stop here
});


// on routes that end in /recipe
// ----------------------------------------------------
router.route('/recipes')
    // add new recipe
    .post(function(req, res) {
        //first get product by ref
        Product.findOne({ref : req.body.ref}).exec(function (err, product){
            if (err)
                res.send(err);


            //Instantiate the new Recipe and new Product
            var recipe = new Recipe();
            var recipeProduct = new RecipeProduct();

            //fulfill the recipe product with product info
            recipeProduct._recipeid = recipe._id;
            recipeProduct.ref = product.ref;
            recipeProduct.info = product.name + ' - ' + product.design;

            //Fulfill the Recipe
            recipe.name = req.body.name;
            recipe.productsList = [];

            //fulfill list with selected products
            recipe.productsList.push(recipeProduct._id);

            // Save the recipe product in recipe
            recipe.save(function(err) {
                 if (err)
                     res.send(err);

                 recipeProduct.save(function (err) {
                     res.json({ message: 'Recipe created!' });

                 });


             });


        });

    })

    // get all the Recipes
    .get(function(req, res) {
        Recipe.find({}).populate('productsList').exec(function(err, recipes) {
            if (err)
                res.send(err);

            res.json(recipes);
        });
    });



module.exports = router;