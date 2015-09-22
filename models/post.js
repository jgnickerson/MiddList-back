var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Post', new Schema({
    author: String,
    title: String,
    description: String,
    condition: String,
    price: Number,
    category: String,
    photo: String,
    date: String
}));