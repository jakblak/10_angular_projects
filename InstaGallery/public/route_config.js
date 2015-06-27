(function() {
  'use strict';

  angular
    .module('app')
    .config(config)

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/gallery', {
        templateUrl: 'views/gallery.view.html',
        controller: 'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/gallery'
      });
  };
})();