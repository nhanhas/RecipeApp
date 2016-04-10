var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Receipt Header VO
var RecipeSchema   = new Schema({
    name: String,
    productsList: [{type: Schema.ObjectId, ref: 'Product'}]
});




module.exports = mongoose.model('Recipe', RecipeSchema);
