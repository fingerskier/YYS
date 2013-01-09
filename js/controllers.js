function AccountCtrl() {}

function MainCtrl($scope, $route, $routeParams, $log, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;

	$scope.data = [
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X']
	];
}