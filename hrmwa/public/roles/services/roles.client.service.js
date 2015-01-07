angular.module('roles').factory('Roles', ['$resource',
function($resource) {
	return $resource('api/roles/:roleId', {
		roleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);

angular.module('roles').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
	}
});