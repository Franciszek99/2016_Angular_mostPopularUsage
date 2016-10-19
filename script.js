var myApp = angular
				.module("myModule", [])
				.filter("gender", function() {
					return function(gender) {
						switch(gender) {
							case 1:
								return "Male";
							case 2:
								return "Female";
							case 3:
								return "Not disclosed";
							
						}
					}
				})
				.controller("myController",  function($scope) {
					var employees = [
						{name: "Ben", salary: 55555,gender: 1, city: "London"},
						{name: "cBen",  salary: 45555,gender: 1, city: "Warsaw"},
						{name: "cBen", salary: 15555,gender: 2, city: "Poznan"},
						{name: "aBen",  salary: 25555,gender: 3, city: "Gdansk"},
						{name: "bBen",  salary: 35555,gender: 1, city: "Bratyslawa"}
					];
					
					$scope.employees=employees;
					
				});
					
