var Post = require("../models/post.js"); //mongoDB collection of posts
var Category = require("../models/category.js"); //mongoDB collection of categories
var ObjectId = require('mongoose').Types.ObjectId; 

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
    var postId = req.params.postId;
    Post.findOne({'_id' : postId}, function(err, post){
        if (err){
            res.send(err);
        }else{
            post.title = req.body.title;
            post.author = req.body.author;
            post.description = req.body.description;
            post.category = req.body.category;
            post.condition = req.body.condition;
            post.price = req.body.condition;
            post.photo = req.body.photo;
            var updateDate = new Date();
            post.date = updateDate.toISOString();
            post.save().then(res.send(), function(){
                //on save failure
                res.status = 500;
                res.send();
            });
        }    
    });
}

exports.deletePost = function(req, res){
    var postId = req.params.postId;
    console.log("Deleting post #" + postId);
    Category.findOne({'posts' : ObjectId(postId)}, function(err, cat){
        //update category to contain new post
        if (err){
            console.log("Error in deleting post from category");
        }else{
            if (cat){
                cat.posts.pull({_id : postId});
                cat.save();
            }else{
                console.log("No category found when deleting post.");
            }
        }
    });
    Post.findOne({'_id' : postId}, function(err, post){
        if (err){
            console.log(err);
            res.send(err);
        }else{
            post.remove();
            res.send();
        }
    });
}

exports.addNewPost= function(req, res){
    /* Initialize and save new post */
    var newPost = new Post();
    newPost.title = req.body.title;
    newPost.author = req.body.author;
    newPost.description = req.body.description;
    newPost.category = req.body.category;
    newPost.condition = req.body.condition;
    newPost.price = req.body.condition;
    newPost.photo = req.body.photo;
    var creationDate = new Date();
    newPost.date = creationDate.toISOString();
    newPost.save();
    /* Add new post to post list in designated category */
    Category.findOne({'title' : newPost.category}, function(err, cat){
        //update category to contain new post
        console.log("Adding post: " + newPost.title + " to " + cat.title);
        if (err){
            console.log("Error in adding post to category");
            res.send(err);
        }else{
            if (cat) {
                cat.posts.push(newPost._id); //use addToSet later
                cat.save();
            }else{
                console.log("No category found when adding new post");
            }
            res.send();
        }
    });
    //res.send();
}