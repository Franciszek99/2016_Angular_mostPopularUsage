	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var countries = [
							{Name: "UK", 
							cities: [ 
								{name: "London"}, 
								{name: "Menchaster"}, 
								{name: "London2"}
								]
								
							}, 
							{Name: "UK1", 
							cities: [ 
								{name: "London"}, 
								{name: "Menchaster"}, 
								{name: "London2"}
								]
								
							},
							{Name: "UK2", 
							cities: [ 
								{name: "London"}, 
								{name: "Menchaster"}, 
								{name: "London2"}
								]
								
							} 
						];
						$scope.countries = countries;
	});
	