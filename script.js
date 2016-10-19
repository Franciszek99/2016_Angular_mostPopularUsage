	var myApp = angular
					.module("myModule", [])
					.controller("myController",  function($scope) {
						var technologies = [
							{Name: "C#", likes:0, dislikes:0},
							{Name: "ASP.NET", likes:0, dislikes:0},
							{Name: "SQL", likes:0, dislikes:0},
							{Name: "AngularJS", likes:0, dislikes:0}
							
							];						
							$scope.technologies = technologies;
							$scope.incrementLikes = function(technology) {
								technology.likes++;
							}
							
							$scope.incrementDislikes = function(technology) {
								technology.likes++;
							}
	});
	