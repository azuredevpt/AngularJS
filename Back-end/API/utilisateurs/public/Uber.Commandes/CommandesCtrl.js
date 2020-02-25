myApp.controller('CommandesCtrl', function ($scope, $rootScope, $http, ServiceHttp, $location) {
	//$scope.titreAccueil = "Prise de Commande en Livraison et à emporter "

	$scope.isCmdShowing = false
	$scope.currentCmd = null
	ServiceHttp.getMethod("http://18.217.36.236:3000/commandes", myCallBack)
	$scope.commandes = []
	function myCallBack(data) {
		if (data != null) {
			$scope.commandes = data
		}
		else
			alert("Erreur")
	}

	$scope.show_cmd = function (id) {

		$scope.isCmdShowing = true
		$scope.currentCmd = $scope.commandes[id]
	}
	$scope.statuscmd = []
	var socket = io.connect('http://18.217.36.236:4000');

	socket.on('uber.msg', myclb);

	function myclb(message) {
		console.log(message)
		console.log($scope.statuscmd)
		if (message.status === "reset")
			$scope.statuscmd = []
		else
			$scope.statuscmd.push(message)
			console.log($scope.statuscmd)
			$scope.$apply();
	}
})