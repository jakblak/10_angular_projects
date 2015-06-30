var express = require('express');
var router = express.Router();

var Article = require('../models/article');

/* GET articles the base '/' goes to '/articles' */
router.get('/', function(req, res) {
  Article.getArticles(function(err, articles) {
    if(err) {
      console.log(err);
    }
    res.json(articles);
  });
});

module.exports = router;
