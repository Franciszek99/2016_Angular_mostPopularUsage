	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var employees = [
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "aBen", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "cBen", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "aBen", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "bBen", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000}
						];
						
						$scope.employees=employees;

	});
	