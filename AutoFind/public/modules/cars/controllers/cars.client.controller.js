'use strict';

// Cars controller
angular.module('cars').controller('CarsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Cars',
	function($scope, $stateParams, $location, Authentication, Cars) {
		$scope.authentication = Authentication;

		// Create new Car
		$scope.create = function() {
			// Create new Car object
			var car = new Cars({
				title: this.title,
				make: this.make,
				model: this.model,
				type: this.type,
				year: this.year,
				price: this.price,
				description: this.description,
				imageUrl: this.imageUrl,
				state: this.state,
				contact_email: this.contact_email
			});

			// Redirect after save
			car.$save(function(response) {
				$location.path('cars/' + response._id);

				// Clear form fields
				$scope.title = '';
				$scope.make = '';
				$scope.model = '';
				$scope.type = '';
				$scope.year = '';
				$scope.price = '';
				$scope.description = '';
				$scope.imageUrl = '';
				$scope.state = '';
				$scope.contact_email = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Car
		$scope.remove = function(car) {
			if (car) {
				car.$remove();

				for (var i in $scope.cars) {
					if ($scope.cars[i] === car) {
						$scope.cars.splice(i, 1);
					}
				}
			} else {
				$scope.car.$remove(function() {
					$location.path('cars');
				});
			}
		};

		// Update existing Car
		$scope.update = function() {
			var car = $scope.car;

			car.$update(function() {
				$location.path('cars/' + car._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Cars
		$scope.find = function() {
			$scope.cars = Cars.query();
		};

		// Find existing Car
		$scope.findOne = function() {
			$scope.car = Cars.get({
				carId: $stateParams.carId
			});
		};
	}
]);