myApp.controller('LoginCtrl.local', function ($scope, $rootScope, $http, $location, $routeParams) {


	if ($routeParams.status === 'disconnect') {

		localStorage.removeItem("user-data");
		$rootScope.isConnected = false
	}

	var utilisateurs = [
		{
			adressemail: "livreur@yahoo.fr",
			mdp: "1234"
		},
		{
			adressemail: "restaurant@yahoo.fr",
			mdp: "1234"
		},
		{
			adressemail: "client@yahoo.fr",
			mdp: "1234"
		},

	]



	$scope.login = function () {
		var isok = false;
		var data =
		{
			adressemail: $scope.adressemail,
			mdp: $scope.mdp
		}

		for (var i = 0; i < utilisateurs.length; i++) {
			if (utilisateurs[i].adressemail == data.adressemail && utilisateurs[i].mdp == data.mdp)
			isok = true
		}

		if (isok)
			alert("Authentification OK")
		else
			alert("Authentification KO")
	}


});