(function() {
  'use strict';

  angular
    .module('app')
    .constant('secrets');

    secrets.$inject = [];

    function secrets() {
      var pub = {
        pubKey: 'pub-c-984428b7-aa9d-4fdb-9362-cae77a234bde',
        subKey: 'sub-c-7492824e-2738-11e5-b869-0619f8945a4f'
      }
    }
})();