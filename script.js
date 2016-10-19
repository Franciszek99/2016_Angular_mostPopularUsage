	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var employee = [
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000},
							{name: "Ben", dateOfBirth: new Date("november 23, 1980"),gender: "Male", salary: 55000}
						];
						
						$scope.employee=employee;
	});
	