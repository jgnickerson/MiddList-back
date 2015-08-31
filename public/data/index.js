var express = require('express');
var controller = require('./data.controller');
var router = express.Router();

router.get('/posts', controller.getPosts);

router.get('/posts/:catId', controller.getCategoryPosts);

router.get('/post/:postId', controller.getPost);

router.get('/cats', controller.getCategories);

router.get('/cat/:catId', controller.getPostCategory);

router.post('/postForm', controller.addNewPost);

router.get('/post/:postId/delete', controller.deletePost);

router.put('/post/:postId/edit', controller.editPost);

module.exports = router;