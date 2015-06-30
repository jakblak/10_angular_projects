(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider
        .when('/categories', {
          templateUrl: 'views/categories.view.html',
          controller: 'CategoriesCtrl'
        })
        .when('/articles', {
          templateUrl: 'views/articles.view.html',
          controller: 'ArticlesCtrl'
        })
        .when('/articles/details/:id', {
          templateUrl: 'views/articles_detail.html',
          controller: 'ArticlesDetailCtrl'
        })
        .when('/articles/category/:category', {
          templateUrl: 'views/cat_articles.view.html',
          controller: 'ArticlesCatCtrl'
        })
        .when('/articles/add/:article', {
          templateUrl: 'views/add_article.view.html',
          controller: 'ArticlesCreateCtrl'
        })
        .when('/articles/edit/:id', {
          templateUrl: 'views/edit_article.view.html',
          controller: 'ArticlesEditCtrl'
        })
        .otherwise({
          redirectTo: '/categories'
        });
    }
})();