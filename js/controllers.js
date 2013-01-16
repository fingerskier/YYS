function AccountCtrl() {}

function MainCtrl($scope, $log) {
	$scope.data = blankRoom();
	$scope.editButtonClass = 'btn-warning';
	$scope.editButtonLabel = 'Edit';
	$scope.editStatus = false;
	$scope.loggedIn = false;
	$scope.login = function() {
		$scope.loggedIn = true;
	}
	$scope.room = [
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X', 'X', 'X']
	];
	$scope.template = {
		account: '/view/account.html'
	}
	$scope.toggleEditStatus = function() {
		$scope.editStatus = !$scope.editStatus;
	}
	$scope.user = {
		email: '',
		password: ''
	}
	
	$scope.$watch('editStatus', function(oldVal, newVal) {
		if (oldVal != newVal) {
			if ($scope.editStatus) {
				$scope.editButtonClass = 'btn-danger';
				$scope.editButtonLabel = 'editing';
			} else {
				$scope.editButtonClass = 'btn-warning';
				$scope.editButtonLabel = 'Edit';
			}
		}
	});
	
	$log.info('YYS loaded')
}