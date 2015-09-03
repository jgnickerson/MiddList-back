var express = require('express');
var controller = require('./data.controller');
var router = express.Router();

router.get('/posts', controller.getPosts);

router.get('/posts/:postId', controller.getPost);

router.get('/category/:catId', controller.getCategoryPosts);

router.get('/categories', controller.getCategories);

router.get('/categories/:catId', controller.getCategory);

router.post('/posts', controller.addNewPost);

router.put('/posts/:postId', controller.editPost);

router.delete('/posts/:postId', controller.deletePost);

module.exports = router;

