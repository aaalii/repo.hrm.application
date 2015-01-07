angular.module('users').config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/users', {
			templateUrl: 'public/users/views/users.client.view.html',
			 controller:"UsersController"
		});
	}
]);