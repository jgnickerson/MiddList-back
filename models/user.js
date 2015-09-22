var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//need to add restrictions on data and required fields
module.exports = mongoose.model('User', new Schema({
	id: String,
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String,
    posts: Array
}));