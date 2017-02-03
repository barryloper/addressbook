'use strict';

require('angular');
require('angular-route');
require('./view1/view1');
require('./view2/view2');
require('./components/version/version');
require('./components/version/version-directive');
require('./components/version/interpolate-filter');

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
