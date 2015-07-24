var express = require('express');
var controller = require('./data.controller');
var router = express.Router();

router.get('/posts', controller.posts);

router.get('/cats', controller.categories);

module.exports = router;