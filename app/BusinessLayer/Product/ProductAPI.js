// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var router = express.Router();

//Load VOs
var Product = require('./Product');


// =============================================API ROUTES=====================================================
// more routes for our API will happen here

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Product API was Called ...');
    next(); // make sure we go to the next routes and don't stop here
});

// on routes that end in /products
// ----------------------------------------------------
router.route('/products')
    .post(function(req, res) {

        //Instantiate Product
        var product = new Product();

        //Fulfill the new Product
        product.ref = req.body.ref;
        product.name = req.body.name;
        product.design = req.body.design;


        // Save the Product
        product.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product created!' });

        });

    })

    // get all the Products
    .get(function(req, res) {
        Product.find().exec(function(err, products) {
            if (err)
                res.send(err);

            res.json(products);
        });
    });



module.exports = router;