'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.weather',
  'myApp.weatherService',
  'myApp.forecast',
  'myApp.forecastDetails',
  'ngAnimate',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/weather'});
}]);