(function() {
  'use strict';

  angular
    .module('app.facebook', [
      'ngRoute',
      'ngFacebook'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$facebookProvider', 'secrets'];
  run.$inject = ['$rootScope'];

  function config($routeProvider, $facebookProvider, secrets) {
    $facebookProvider
      .setAppId(secrets.ID);
    $facebookProvider
      .setPermissions("email,public_profile, user_posts, publish_actions, user_photos");
    $routeProvider
      .when('/facebook', {
        templateUrl: 'facebook/facebook.html',
        controller: 'fbCtrl'
      });
  }

  function run($rootScope) {
    // Code from FBook JS SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

})();