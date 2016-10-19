var myApp = angular
				.module("myModule", [])
				.controller("myController",  function($scope) {
					var employees = [
						{name: "Ben", salary: 55555,gender: "Male", city: "London"},
						{name: "cBen",  salary: 45555,gender: "Female", city: "Warsaw"},
						{name: "cBen", salary: 15555,gender: "Male", city: "Poznan"},
						{name: "aBen",  salary: 25555,gender: "Male", city: "Gdansk"},
						{name: "bBen",  salary: 35555,gender: "Male", city: "Bratyslawa"}
					];
					
					$scope.employees=employees;
					
					
					$scope.search = function(item){
						if($scope.searchText == undefined){
							return true;
						}
						else{
							if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1)
							{
								return true;
							}
						}
						return false;
					}
					
				});
					
