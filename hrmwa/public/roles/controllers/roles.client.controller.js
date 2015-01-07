angular.module('roles').controller('RolesController', ['$scope', 
'$routeParams', '$location', '$filter', '$resource', 'Authentication', 'Roles',
	function($scope, $routeParams, $location, $filter, $resource, Authentication, Roles) {
		$scope.authentication = Authentication;

		var orderBy = $filter('orderBy');

		$scope.data = {
		'rol': null
		};

		$scope.selected_amount = 10;
		$scope.currentPage = 0;
   	 	$scope.pageSize = $scope.selected_amount;
    	$scope.numberOfPages=function(){
        return Math.ceil($scope.roles.length/$scope.selected_amount);                
    	}

		$scope.create = function() {
			var role = new Roles({
				name: this.name,
				description: this.description
			});

			role.$save(function(response) {
				$location.path('roles');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		$scope.find = function() {
			$scope.roles = Roles.query();
		};

		$scope.findOne = function() {
			$scope.role = Roles.get({
				roleId: $routeParams.roleId
			});
		};

		$scope.update = function() {
			$scope.data.emp.$update(function(){
				$location.path('roles');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(role) {
			if (role) {
				role.$remove(function() {
					for (var i in $scope.roles) {
						if($scope.roles[i] === role) {
							$scope.roles.splice(i, 1);
						}
					}
				});
			} else {
				$scope.role.$remove(function(){
					$location.path('roles');
				});
			}
		};

		$scope.order = function(predicate, reverse){
		$scope.roles = orderBy($scope.roles, predicate, reverse);
	}

	}
]);