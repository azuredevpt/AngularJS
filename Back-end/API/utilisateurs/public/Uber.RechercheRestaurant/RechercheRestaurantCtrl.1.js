myApp.controller('RechercheRestaurantCtrl', function ($scope, ServiceHttp, $http, $location, $routeParams) {

	$scope.restaurants = []
	var codePostal = $routeParams.codePostal
	if (!codePostal)
		$location.url("/")

	$scope.codePostal = codePostal
	ServiceHttp.getMethod('http://localhost:3000/restaurant/' + codePostal, myCallBack)



	$scope.getNumber = function (num) {
		return new Array(num);
	}

	$scope.specialites = []

	function myCallBack(data) {
		if (data != null) {
			$scope.restaurants = data
		}
	}



});