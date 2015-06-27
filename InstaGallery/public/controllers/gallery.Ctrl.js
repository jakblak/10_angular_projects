(function() {
  'use strict';

  angular
    .module('app')
    .controller('GalleryCtrl', GalleryCtrl);

    GalleryCtrl.$inject = ['$scope', 'Lightbox', 'Instagram'];

    function GalleryCtrl($scope, Lightbox, Instagram) {

      $scope.images = [];
      var imgArray = [];

      Instagram.fetchPopular(function(data) {

        $scope.images = data;
        angular.forEach(data, function(value, key) {
          imgArray.push(value.images.standard_resolution);
        });

        $scope.openLightboxModal = function(index) {
          Lightbox.openModal(imgArray, index);
        }
      });

    }
})();