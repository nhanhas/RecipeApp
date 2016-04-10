var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Products VO
var RecipeProductSchema   = new Schema({
    _recipeid: {type: Schema.ObjectId, ref: 'Recipe'},
    ref: String,
    quantity: String,
    info: String

});

module.exports = mongoose.model('RecipeProduct', RecipeProductSchema);