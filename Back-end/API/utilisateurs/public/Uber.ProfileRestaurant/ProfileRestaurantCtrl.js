myApp.controller('ProfileRestaurantCtrl', function ($scope, ServiceHttp, $http, $location, $routeParams) {

	$scope.restaurants = []
	var idRestaurant = $routeParams.idRestaurant
	if (!idRestaurant)
		$location.url("/")


	//ServiceHttp.getMethod('http://localhost:3000/menusrestaurant/' + idRestaurant, myCallBack)
	var specialites = [
		{
			id: "5d1cbb631c9d4400002aaff5",
			produits: [
				{ libelle: "Menu Giant", prix: 7.00 },
				{ libelle: "Menu Long Fish", prix: 8.00 }
			]
		},
	{
			id: "5e5174181c9d44000030d4ca",
			produits: [
				{ libelle: "Menu Giant", prix: 7.00 },
				{ libelle: "Menu Long Fish", prix: 8.00 }
			]
		},
		{
			id: "5d1cbbf61c9d4400002aaff6",
			produits: [
				{ libelle: "Menu Royal king", prix: 8.50 },
				{ libelle: "Menu Triple Wooper", prix: 9.90 }
			]
		}
		,
		{
			id: "5d1cb43f1c9d4400002aaff4",
			produits: [
				{ libelle: "Menu Big Mac", prix: 8.00 },
				{ libelle: "Menu Fish", prix: 9.00 }
			]
		}
		,
		{
			id: "5d1cf5001c9d440000d6b529",
			produits: [
				{ libelle: "Menu Solo", prix: 9.00 },
				{ libelle: "Menu Family", prix: 19.90 }
			]
		}
		,
		{
			id: "5d1d329c1c9d440000d6b52b",
			produits: [
				{ libelle: "Menu Royal king", prix: 8.50 },
				{ libelle: "Menu Triple Wooper", prix: 9.90 }
			]
		}
	]

	function getProduits(idPrduit) {

		for (var i = 0; i < specialites.length; i++) {
			if (specialites[i].id === idPrduit)
				$scope.produits = specialites[i].produits;
		}
	}

	getProduits(idRestaurant)



	function myCallBack(data) {
		if (data != null) {
			//$scope.restaurants = data
			$scope.restaurant = data[0]
			// for(var i=0;i<$scope.restaurant.produits.length; i++)
			// {
			// 	$scope.restaurant.produits[i] = JSON.parse($scope.restaurant.produits[i])
			// }
			//$scope.restaurant.produits = JSON.parse(data[0].produits)
			//alert(JSON.stringify(data[0].produits).libelle)
		}
	}



});