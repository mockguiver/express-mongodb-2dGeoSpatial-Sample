// Module dependencies

var mongoose = require ('mongoose');
mongoose.connect('localhost','datatest');

// Schema definition

var placeSchema = mongoose.Schema({
	name: String,
	geo: {type: [Number], index: '2d'}
})

var Place = mongoose.model('Place', placeSchema);

exports.Place = Place;