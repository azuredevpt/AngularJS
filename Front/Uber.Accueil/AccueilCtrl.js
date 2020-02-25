myApp.controller('AccueilCtrl', function ($scope, $rootScope, $http, $location) {

	$scope.restaurants = []


	 	$scope.go = function () {
			$location.url("/restaurants/" + $scope.codepostal)
			 /*
			if ($scope.restaurants.length > 0)
				$location.url("/restaurants/" + $scope.codepostal)
			else
				alert("Aucun résultat ne correspond à votre recherche")
				*/
		}
	 
	$scope.isRestaurantFound = true

	$scope.rechercher = function (codepostal) {
		$http.get('http://localhost:3000/restaurant/' + codepostal).then(function (response) {

			//Succes
			if (response.data)
				$scope.restaurants = response.data
			//localStorage.setItem("user-data", JSON.stringify(response.data[0]));
			//$scope.isBadAuth = false;
			//$location.url("/");
			if (response.data.length > 0)
				$scope.isRestaurantFound = false
			else
				$scope.isRestaurantFound = true

		}, function (response) {
			alert("Erreur")
			//alert("Erreur! " + response + "  "+ 'http://localhost:3001/auth/?username=' + $scope.adressemail + '&mdp=' + $scope.mdp )

		});
	}


});