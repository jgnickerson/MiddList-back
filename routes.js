module.exports = function(app) {

    app.use('/', require('./public/data'));

    //universal redirect to posts
    app.route('/*').get(function(req, res) {
        res.redirect('/posts');
    });
};