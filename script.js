	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
		
	var employee = {
		firstName: "David",
		lastName: "Hastiong",
		gender: "Male"
	};
	    $scope.employee = employee
	});
	