var app = angular.module('galPhoto',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/gallery', {
			templateUrl: 'views/gallery.view.html',
			controller: 'GalleryCtrl'
		})
		.otherwise({redirectTo: '/gallery'});
}]);