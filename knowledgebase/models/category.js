var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', articleSchema);

// Route Middleware
module.exports.getCategories = function(callback) {
  Category.find(callback);
}

module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
}

// Get categories by category
module.exports.getCategoriesByCategory = function(category, callback) {
  var query = {category: category};
  Category.find(query, callback);
}

module.exports.createCategory = function(newCategory, callback) {
  newCategory.save(callback);
}