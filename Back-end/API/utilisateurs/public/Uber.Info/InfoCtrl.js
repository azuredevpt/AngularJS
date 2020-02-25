myApp.controller('InfoCtrl', function ($scope, $rootScope, $http, $location) {
	//$scope.titreAccueil = "Prise de Commande en Livraison et à emporter "
	
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

		//$scope.showpopup = true

		$http.put('http://localhost:3000/utilisateur/', JSON.stringify(data)).then(function (response) {

			if (response.data)
				 
				localStorage.setItem("user-data", JSON.stringify(data));
				$scope.class = "alert alert-success"
				$scope.message = "Mise à jour avec succès"
			//$location.url("/");
		}, function (response) {
			$scope.class = "alert alert-danger"
			$scope.message = "Echec de mise à jour"
			//alert("Erreur!" + response.headers())

		});
	}


});