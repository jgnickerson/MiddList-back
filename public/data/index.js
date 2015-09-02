var express = require('express');
var controller = require('./data.controller');
var router = express.Router();

router.get('/posts', controller.getPosts);

router.get('/posts/:catId', controller.getCategoryPosts);

router.get('/post/:postId', controller.getPost);

router.get('/cats', controller.getCategories);

router.get('/cat/:catId', controller.getPostCategory);

router.post('/posts', controller.addNewPost);

router.delete('/posts/:postId', controller.deletePost);

router.put('/posts/:postId', controller.editPost);

module.exports = router;