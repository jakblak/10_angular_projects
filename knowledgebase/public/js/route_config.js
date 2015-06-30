(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config() {
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
          templateUrl: 'views/articles.detail.html',
          controller: 'ArticlesDetailCtrl'
        })
        .when('/articles/category/:category', {
          templateUrl: 'views/cat_articles.view.html',
          controller: 'ArticlesCatCtrl'
        })
        .when('/categories', {
          templateUrl: 'views/categories.view.html',
          controller: 'CategoriesCtrl'
        })
        .when('/articles/add/:category', {
          templateUrl: 'views/add_articles.view.html',
          controller: 'ArticlesCreateCtrl'
        })
        .when('/articles/edit/:id', {
          templateUrl: 'views/edit_articles.view.html',
          controller: 'ArticlesEditCtrl'
        })
        .otherwise({
          redirectTo: '/categories'
        });
    }
})();