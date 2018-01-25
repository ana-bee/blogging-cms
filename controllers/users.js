var express = require('express');
var router = express.Router();

// User profile page
router.get('/user', function (req, res) {
    res.render('users/view-user-profile');
});

module.exports = router;