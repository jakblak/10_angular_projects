(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'ngFacebook',
      'app.facebook',
      'app.view1',
      'app.view2'
    ])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/facebook'
    });
  }

})();