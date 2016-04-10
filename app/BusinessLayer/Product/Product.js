var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Products VO
var ProductSchema   = new Schema({
    ref: String,
    name: String,
    design: String

});

module.exports = mongoose.model('Product', ProductSchema);