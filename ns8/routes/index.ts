var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NS8 Dev Test', author: 'Kevin Smith', webPage: 'kevinsmithwebdev.com' });
});

export = router;
