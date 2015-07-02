(function() {
  'use strict';

  angular
    .module('app')
    .controller('ArticlesCtrl', ArticlesCtrl)
    .controller('ArticlesCatCtrl', ArticlesCatCtrl)
    .controller('ArticlesDetailCtrl', ArticlesDetailCtrl)
    .controller('ArticleCreateCtrl', ArticleCreateCtrl)
    .controller('ArticleEditCtrl', ArticleEditCtrl);

  ArticlesCtrl.$inject = ['$scope', '$http'];
  ArticlesCatCtrl.$inject = ['$scope', '$http', '$routeParams'];
  ArticlesDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];
  ArticleCreateCtrl.$inject = ['$scope', '$http', '$routeParams', '$location'];
  ArticleEditCtrl.$inject = ['$scope', '$http', '$routeParams', '$location'];

  function ArticlesCtrl($scope, $http) {
    $http.get('/articles')
      .success(function(data) {
        $scope.articles = data;
      });
  }

  function ArticlesCatCtrl($scope, $http, $routeParams) {
    $http.get('/articles/category' + $routeParams.category)
      .success(function(data) {
        $scope.cat_articles = data;
        $scope.category = $routeParams.category;
      });
  }

  function ArticlesDetailCtrl($scope, $http, $routeParams) {
    $http.get('/articles/' + $routeParams.id)
      .success(function(data) {
        $scope.article = data;
      });
  }

  function ArticleCreateCtrl($scope, $http, $routeParams, $location) {
    $http.get('/categories')
      .success(function(data) {
        $scope.categories = data;
      });

      $scope.addArticle = function() {
        var data = {
          title: $scope.title,
          body: $scope.body,
          category: $scope.category
        }
        $http.post('/articles', data)
          .success(function(data, status) {
            console.log(status);
          });
          $location.path('/articles');
      }
  }

  function ArticleEditCtrl($scope, $http, $routeParams, $location) {
    $http.get('/categories')
      .success(function(data) {
        $scope.categories = data;
      });

      $http.get('/articles/' + $routeParams.id)
      .success(function(data) {
        $scope.article = data;
      });

      $scope.updateArticle = function() {
        var data = {
          id: $routeParams.id,
          title: $scope.article.title,
          body: $scope.article.body,
          category: $scope.article.category
        }

        $http.put('/articles', data)
          .success(function(data, status) {
            console.log(status);
          });
          $location.path('/articles');
      }
  }
})();