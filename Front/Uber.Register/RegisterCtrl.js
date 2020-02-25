myApp.controller('RegisterCtrl', function ($scope, $rootScope, $http, $location) {
	$scope.titreAccueil = "Prise de Commande en Livraison et à emporter "
	$rootScope.isConnected = false;
	if (localStorage.getItem('user-data') != null) {
		$scope.userdata = JSON.parse(localStorage.getItem('user-data'));
		populerUser($scope.userdata)
	}
	function populerUser(userdata) {
		$scope.nom = userdata.nom
		$scope.prenom = userdata.prenom
		$scope.adressemail = userdata.adressemail
		$scope.mdp = userdata.mdp
		$scope.mdp2 = userdata.mdp
		$scope.tel = userdata.tel
		$scope.adresse = userdata.adresse
		$scope.codepostal = userdata.codepostal
		$scope.ville = userdata.ville
		$scope.pays = userdata.pays
		$scope.commentaire = userdata.commentaire
		$scope.type_inscription = userdata.type_inscription
	}

	$scope.postdata = function () {
		var data =
		{
			nom: $scope.nom,
			prenom: $scope.prenom,
			adressemail: $scope.adressemail,
			mdp: $scope.mdp,
			tel: $scope.tel,
			adresse: $scope.adresse,
			codepostal: $scope.codepostal,
			ville: $scope.ville,
			pays: $scope.pays,
			commentaire: $scope.commentaire,
			type_inscription: $scope.type_inscription


		}


		$http.post('http://localhost:3000/utilisateur', JSON.stringify(data)).then(function (response) {

			if (response.data)
				$rootScope.isConnected = true

			$location.url("/login");
		}, function (response) {
			$rootScope.isConnected = true
			alert("Erreur!")

		});
	}


});