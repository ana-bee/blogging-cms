var express = require('express');
var router = express.Router();

router.get('/posts/post', function (req, res) {
    res.render('posts/view-single-post');
});

module.exports = router;