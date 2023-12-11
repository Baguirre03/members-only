var express = require('express');
var router = express.Router();
const passportController = require('../config/passport.js')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Members only', user: req.user });
});

module.exports = router;
