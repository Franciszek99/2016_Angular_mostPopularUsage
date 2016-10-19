	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var employee = {
							firstName: "Ben",
							lastName: "Hasting",
							gender: "Male"
						};
						
						$scope.employee=employee;
	});
	