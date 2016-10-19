	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var employees = [
							{firstName: "Ben", lastName: "Hastings", gender:"Male", salary: 55000},
							{firstName: "Ben1", lastName: "Hastings", gender:"Male", salary: 55000},
							{firstName: "Ben2", lastName: "Hastings", gender:"Male", salary: 55000},
							{firstName: "Ben3", lastName: "Hastings", gender:"Male", salary: 55000},
							{firstName: "Ben4", lastName: "Hastings", gender:"Male", salary: 55000}
						];
						$scope.employees = employees;
	});
	