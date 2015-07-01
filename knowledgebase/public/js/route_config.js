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
          templateUrl: 'views/article_details.view.html',
          controller: 'ArticlesDetailCtrl'
        })
        .when('/articles/category/:category', {
          templateUrl: 'views/cat_articles.view.html',
          controller: 'ArticlesCatCtrl'
        })
        .when('/articles/add', {
          templateUrl: 'views/add_article.view.html',
          controller: 'ArticleCreateCtrl'
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