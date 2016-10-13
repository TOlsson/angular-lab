'use strict';

angular.module('myApp.forecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/forecast', {
		templateUrl: 'app/forecast/forecast.html',
		controller: 'ForecastCtrl'
	});
}])
.controller('ForecastCtrl', ["$scope", 'weatherForecast', function($scope, weatherForecast) {
	// fetch weather forecast
	$scope.model = {};
	var params = {location: "campus-nkpg"};
	weatherForecast.query(params, function (result) {
		// this function is called after the request is resolved
		$scope.model = result[0];
		console.log(result);
	});
}]);