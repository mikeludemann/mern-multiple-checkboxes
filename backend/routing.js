let mongoose = require('mongoose'),
	express = require('express'),
	routing = express.Router();

let checkbox = require('./model');

routing.route('/save').post((req, res, next) => {
	checkbox.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	})
});

routing.route('/').get((req, res) => {
	checkbox.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	})
})

module.exports = routing;
