var Post = require("../models/post.js"); //mongoDB collection of posts
var Category = require("../models/category.js"); //mongoDB collection of categories

exports.getPosts = function(req, res){
    Post.find({}, function(err, posts){
        if (err){
            res.send(err);
        }else{
            res.send(posts);
        }
    });
}

exports.getCategories = function(req, res){
    Category.find({}, function(err, cats){
        if (err){
            res.send(err);
        }else{
            res.send(cats);
        }
    });
}

exports.getPost = function(req, res){
    var postId = req.params.postId;
    Post.findOne({'_id' : postId}, function(err, post){
        if (err){
            res.send(err);
        }else{
            res.send(post);
        }    
    });
}

exports.getCategoryPosts = function(req, res){
    var category = req.params.category;
    Post.find({'category' : category}, function(err, posts){
        if (err){
            res.send(err);
        }else{
            res.send(posts);
        }
    });
}

exports.getCategory = function(req, res){
    var category = req.params.category;
    Category.findOne({'title' : category}, function(err, cat) {
        if (err){
            res.send(err);
        }else{
            res.send(cat);
        }
    });
}

exports.editPost = function(req, res){

}

exports.deletePost= function(req, res){
    var postId = req.params.postId;
    Post.remove({'_id' : postId}), function(err, post){
        if (err){
            res.send(err);
        }else{
            console.log("Deleted post #" + post._id);
            res.send("Deleted post #" + post._id);
        }
    }
}

exports.addNewPost= function(req, res){
    /* Initialize and save new post */
    var newPost = new Post();
    newPost.title = req.params.title;
    newPost.author = req.params.author;
    newPost.description = req.params.description;
    newPost.category = req.params.category;
    newPost.condition = req.params.condition;
    newPost.price = req.params.condition;
    newPost.photo = req.params.photo;
    newPost.save();
    /* Add new post to post list in desginated category */
    Category.findOne({'title' : newPost.category}, function(err, cat){
        //update category to contain new post
    });
    if (err){
        res.send(err);
    }else{
        res.send();
    }

}