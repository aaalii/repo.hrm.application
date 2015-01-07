angular.module('employees').controller('EmployeesController', ['$scope', 
'$routeParams', '$location', '$filter', '$resource', 'Authentication', 'Employees',
	function($scope, $routeParams, $location, $filter, $resource, Authentication, Employees) {
		$scope.authentication = Authentication;

		var orderBy = $filter('orderBy');

		$scope.data = {
		'emp': null
		};

		$scope.selected_amount = 10;
		$scope.currentPage = 0;
   	 	$scope.pageSize = $scope.selected_amount;
    	$scope.numberOfPages=function(){
        return Math.ceil($scope.employees.length/$scope.selected_amount);                
    	}

		$scope.create = function() {
			var employee = new Employees({
				firstname: this.firstname,
				lastname: this.lastname,
				othername: this.othername,
				gender: this.gender,
				dateofbirth: this.dateofbirth,
				nationality: this.nationality,
				maritalstatus: this.maritalstatus,
				address: this.address,
				town: this.town,
				postcode: this.postcode,
				country: this.country,
				hometel: this.hometel,
				homemobile: this.homemobile,
				homemail: this.homemail,
				worktel: this.worktel,
				workmobile: this.workmobile,
				workmail: this.workmail,
				othercomments: this.othercomments
			});

			employee.$save(function(response) {
				$location.path('employees');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		$scope.find = function() {
			$scope.employees = Employees.query();
		};

		$scope.findOne = function() {
			$scope.employee = Employees.get({
				employeeId: $routeParams.employeeId
			});
		};

		$scope.update = function() {
			$scope.data.emp.$update(function(){
				$location.path('employees');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(employee) {
			if (employee) {
				employee.$remove(function() {
					for (var i in $scope.employees) {
						if($scope.employees[i] === employee) {
							$scope.employees.splice(i, 1);
						}
					}
				});
			} else {
				$scope.employee.$remove(function(){
					$location.path('employees');
				});
			}
		};

		$scope.order = function(predicate, reverse){
		$scope.employees = orderBy($scope.employees, predicate, reverse);
	}

	}
]);