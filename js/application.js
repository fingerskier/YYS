var YYS = angular.module('YYS', ['ngResource'], function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/account', {
		controller: AccountCtrl,
		templateUrl: '/account.cfm'
	});
});

YYS.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
})
.run(function($log, $rootScope) {
	$log.info('YYS started');
	$rootScope.hello = function() {
		$log.info('hello');
		// use via $scope.hello() anywhere...
	}
});