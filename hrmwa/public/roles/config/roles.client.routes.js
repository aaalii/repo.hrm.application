angular.module('roles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/roles', {
			templateUrl: 'public/roles/views/roles.client.view.html',
			controller:"RolesController"
		});
	}
]);