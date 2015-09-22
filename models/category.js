var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Category', new Schema({
    title: String,
    description: String,
    posts: [Schema.Types.ObjectId]
}));