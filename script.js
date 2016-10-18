	var myApp = angular.module("myModule", []);
	
	myApp.controller("myController",  function($scope) {
		
	var employee = {
		firstName: "David",
		lastName: "Hastiong",
		gender: "Male"
	};
	    $scope.employee = employee
	});
	