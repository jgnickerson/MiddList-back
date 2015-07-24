var express = require('express');
var controller = require('./data.controller');
var router = express.Router();

router.get('/posts', controller.posts);

router.get('/cats', controller.categories);

router.post('/postForm', controller.newPost);

module.exports = router;