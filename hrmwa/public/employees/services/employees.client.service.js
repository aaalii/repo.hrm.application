angular.module('employees').factory('Employees', ['$resource',
function($resource) {
	return $resource('api/employees/:employeeId', {
		employeeId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);

angular.module('employees').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
	}
});