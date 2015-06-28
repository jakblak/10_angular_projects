'use strict';

// Configuring the Cars module
angular.module('cars').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Cars', 'cars', 'dropdown', '/cars(/create)?');
		Menus.addSubMenuItem('topbar', 'cars', 'List Cars', 'cars');
		Menus.addSubMenuItem('topbar', 'cars', 'Add a Car', 'cars/create');
	}
]);