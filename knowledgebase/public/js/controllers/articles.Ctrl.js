(function() {
  'use strict';

  angular
    .module('app')
    .controller('ArticlesCtrl', ArticlesCtrl)
    .controller('ArticlesDetailCtrl', ArticlesDetailCtrl)
    .controller('ArticlesCatCtrl', ArticlesCatCtrl)
    .controller('ArticleCreateCtrl', ArticleCreateCtrl);
    //.controller('ArticlesEditCtrl', ArticlesEditCtrl);

  ArticlesCtrl.$inject = ['$scope', '$http'];
  ArticlesCatCtrl.$inject = ['$scope', '$http', '$routeParams'];

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

  function ArticleCreateCtrl() {

  }

})();