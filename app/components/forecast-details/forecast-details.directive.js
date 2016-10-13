'use strict';

//Re
angular.module('myApp.forecastDetails', []);

angular.module('myApp.forecastDetails').directive('forecastDetails', function(){
	return {
			restrict: "E",
			scope:{
				forecast:'='
			},
			replace: true,
			templateUrl: "app/components/forecast-details/forecast-details.html"
		};
});
		