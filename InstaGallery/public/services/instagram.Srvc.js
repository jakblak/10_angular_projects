(function() {
  'use strict';

  angular
    .module('app')
    .factory('Instagram', Instagram);

    Instagram.$inject = ['$resource', 'apiKey'];

    function Instagram($resource, apiKey) {

      return {
        fetchPopular: fetchPopular
      }

      function fetchPopular(cb) {
        var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
          // client_id: 'e6bf8f62b98a46459c53d56945d3ed9f'
          client_id: apiKey.ig
        }, {
          fetch: {
            method: 'JSONP'
          }
        });
        api.fetch(function(response) {
          cb(response.data);
        });
      }

    }
})();