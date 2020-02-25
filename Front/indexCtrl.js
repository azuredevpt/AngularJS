myApp.controller('indexCtrl', function($scope,$rootScope) {	
	$rootScope.isConnected = localStorage.getItem('user-data') === null ? false : true
});