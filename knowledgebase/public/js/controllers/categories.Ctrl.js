(function() {
  'use strict';

  angular
    .module('app')
    .controller('CategoriesCtrl', CategoriesCtrl);

  CategoriesCtrl.$inject = ['$scope', '$http'];

  function CategoriesCtrl($scope, $http) {

    $http.get('/categories')
      .success(function(data) {
        $scope.categories = data;
      });

    $http.get('/articles')
      .success(function(data) {
        $scope.articles = data;
      });
  }

})();