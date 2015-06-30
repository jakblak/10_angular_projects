var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Route Middleware
module.exports.getArticles = function(callback) {
  Article.find(callback);
}

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

// Get articles by category
module.exports.getArticlesByCategory = function(category, callback) {
  var query = {category: category};
  Article.find(query, callback);
}

// Add an Article
module.exports.createArticle = function(newArticle, callback) {
  newArticle.save(callback);
}

// Update Article
module.exports.updateArticle = function(id, data, callback) {
  var title = data.title;
  var body = data.body;
  var category = data.category;

  var query = { _id: id};

  Article.findById(id, function(err, article) {
    if(!article) {
      return next(new Error('Could not load article'));
    } else {
      // Update
      article.title = title;
      article.body = body;
      article.category = category;

      article.save(callback);
    }
  });
}

module.exports.removeArticle = function(id, callback) {
  Article.find({ _id: id})
    .remove(callback);
}

