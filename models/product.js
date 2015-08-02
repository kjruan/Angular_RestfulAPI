var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	category: String,
	price: Number
});

module.exports = mongoose.model('Product', ProductSchema);