var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
  // $routeProvider.otherwise({redirectTo: '/view1'});
  $locationProvider.html5Mode(true);
}]);