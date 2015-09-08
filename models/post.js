var mongoose = require('mongoose');

module.exports = mongoose.model('Post',{
    author: String,
    title: String,
    description: String,
    condition: String,
    price: Number,
    category: String,
    photo: String,
});