var express = require('express');
var router = express.Router();

router.use(require('./users'));
router.use(require('./posts'));

router.get('/', function(req, res) {
    res.render('welcome-page');
});

module.exports = router;