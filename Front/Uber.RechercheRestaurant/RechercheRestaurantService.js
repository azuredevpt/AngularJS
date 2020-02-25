myApp.factory("ServiceRestaurant", function ($http) {

	return {
		getrestaurants : function (codepostal, callback) {
			
			$http.get('http://localhost:3000/restaurant/' + codepostal).then(function (response) {
				callback(response.data)
			}, function (response) {
				callback(null)
			});
		}
	}

});


