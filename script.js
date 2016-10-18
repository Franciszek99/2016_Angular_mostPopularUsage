	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var country = {
							name : "Polska",
							capital: "Warszawa",
							flag: "2000px-Flag_of_Poland_(normative).svg.png"
						};
			$scope.country = country;						
	});
	