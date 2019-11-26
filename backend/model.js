const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkboxes = new Schema({
	checkbox: {
		type: String
	},
}, {
	collection: 'checkboxes'
});

module.exports = mongoose.model('Checkboxes', checkboxes);
