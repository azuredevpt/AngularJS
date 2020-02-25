myApp.controller('LoginCtrl', function ($scope, $rootScope, $http, $location, $routeParams) {



	var socket = io.connect('http://18.217.36.236:4000');



	$scope.livreurAccepte =function()
	{

		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status: 'Accepté par le livreur'})

	}	
	$scope.restoAccepte =function()
	{
		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status: 'Accepté par le réstaurateur'})
		
	}	
	$scope.reset =function()
	{
		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status: 'reset'})
		
	}	
	$scope.livraisonEnCours =function()
	{
		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status: 'En cours de livraison'})

	}	
	$scope.PreparationEnCours =function()
	{
		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status:'En cours de préparation'})

	}	

	$scope.LivraisonOk =function()
	{
		socket.emit('uber.msg', {id_cmd:"uber.portail.12345678", status: 'Livré'})

	}	

 
	if ($routeParams.status === 'disconnect') {
		 
		localStorage.removeItem("user-data");
		$rootScope.isConnected =false
	}
 

	//alert($rootScope.isConnected)
	$scope.set_type = function (untype) {
		$scope.type_inscription = untype
	}

	$scope.isBadAuth = false;
	$scope.login = function () {
		var data =
		{
			adressemail: $scope.adressemail,
			mdp: $scope.mdp
		}
		//http://localhost:3001/auth/?username=toto@yahoo.fr&mdp=1234

		$http.get('http://localhost:3000/auth/?username=' + $scope.adressemail + '&mdp=' + $scope.mdp).then(function (response) {

			//Succes
			if (response.data)
			$rootScope.isConnected = true
			$scope.class = "alert alert-success"
			$scope.message = "Succès d'auhentification"
			//alert(response.data[0])
			localStorage.setItem("user-data", JSON.stringify(response.data[0]));
			//$scope.isBadAuth = false;
			$location.url("/");

		}, function (response) {
			$scope.isBadAuth = true
			$scope.class = "alert alert-danger"
			$scope.message = "Echec d'auhentification"
			$rootScope.isConnected = true
			//alert("Erreur! " + response + "  "+ 'http://localhost:3001/auth/?username=' + $scope.adressemail + '&mdp=' + $scope.mdp )

		});
	}


});