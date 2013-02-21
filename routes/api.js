var Place = require('../models/data').Place;

exports.insertData = function(req, res){
	var coord = req.body['geo'].split(',');
	var park = new Place({geo:coord});
	var cb = function(err,docs) {
			if (!err) {
				res.json(docs);
			} else {
				throw err;
			}
		};
	park.save(cb);
};

exports.readAllData = function(req, res){
	var cb = function(err,docs) {
			if (!err) {
				res.json(docs);
			} else {
				throw err;
			}
		};
	Place.find(cb);
};

exports.readLocData = function(req, res){
	var coord = req.params.loc.split(',');
	var distance = req.params.dis;
	var cb = function(err,docs) {
			if (!err) {
				res.json(docs);
			} else {
				throw err;
			}
		};
	Place.find({geo: { $near: coord, $maxDistance: distance }}, cb);
};