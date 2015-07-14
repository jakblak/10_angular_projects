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
          $facebook.api('/me/picture')
            .then(function(response) {
              $scope.picture = response.data.url;
              $facebook.api('/me/permissions')
                .then(function(response) {
                  $scope.permissions = response.data;
                  $facebook.api('/me/posts')
                    .then(function(response) {
                      $scope.posts = response.data;
                    });
                });
            });
        },
        function(err) {
          $scope.welcomeMsg = 'Please Log In';
        });
    }

    $scope.postStatus = function() {
      var body = this.postBody;
      $facebook.api('/me/feed', 'post', {
        message: body
      })
      .then(function(response) {
        $scope.msg = 'Thanks for Posting';
        refresh();
      });
    }

    refresh();
  }
})();