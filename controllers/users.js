var express = require('express');
var router = express.Router();

// User profile page
router.get('/user', function (req, res) {
    res.render('users/view-user-profile');
});

router.get('/user/new', function (req, res) {
    res.render('users/create-new-user-form');
});

module.exports = router;