var express = require('express');
var router = express.Router();

router.use(require('./users'));
router.use(require('./posts'));

router.get('/', function(req, res) {
    res.render('welcome-page');
});

router.get('/login', function(req, res) {
    res.render('login-page');
});

module.exports = router;