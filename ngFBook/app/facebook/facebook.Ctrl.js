(function() {
  'use strict';

  angular
    .module('app.facebook')
    .controller('fbCtrl', fbCtrl);

  fbCtrl.$inject = ['$scope', '$facebook'];

  function fbCtrl($scope, $facebook) {
    $scope.isLoggedIn = false;

    $scope.login = function() {
      $facebook.login()
        .then(function() {
          // $scope.isLoggedIn = true;
          refresh();
        });
    }

    $scope.logout = function() {
      $facebook.logout()
        .then(function() {
          $scope.isLoggedIn = false;
          refresh();
        });
    }

    function refresh() {
      $facebook.api('/me')
        .then(function(response) {
          $scope.isLoggedIn = true;
          $scope.welcomeMsg = 'Welcome ' + response.name;
          $scope.userInfo = response;
        },
        function(err) {
          $scope.welcomeMsg = 'Please Log In';
        });
    }

    refresh();
  }
})();