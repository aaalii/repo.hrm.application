angular.module('employees').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/employees', {
			templateUrl: 'public/employees/views/employees.client.view.html',
			controller:"EmployeesController"
		});
	}
]);