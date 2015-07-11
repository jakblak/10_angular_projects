(function() {
  'use strict';

  angular
    .module('app')
    .controller('JoinCtrl', JoinCtrl);

    JoinCtrl.$inject = ['$scope', '$rootScope', '$location', 'PubNub', 'secrets'];

    function JoinCtrl($scope, $rootScope, $location, PubNub, secrets) {
      $scope.data = {
        username: 'User_' +Math.floor(Math.random() * 1000)
      };

      $scope.join = function() {
        var _ref, _ref1;
        $rootScope.data || ($rootScope.data = {});
        $rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
        $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
        $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username
        console.log($rootScope);

        PubNub.init({
          subscribe_key: secrets.subKey,
          publish_key: secrets.pubKey,
          uuid: $rootScope.data.uuid
        });
        return $location.path('/main');
      }

    }
})();