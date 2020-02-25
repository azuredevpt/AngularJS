myApp.factory("ServiceHttp", function ($http) {

	return {
		getMethod : function (url, callback) {
			
			$http.get(url).then(function (response) {
				callback(response.data)
			}, function (response) {
				callback(null)
			});
		},
		postMethod : function (url,data, callback) {
			
			$http.post(url, JSON.stringify(data)).then(function (response) {
				callback(response.data)
			}, function (response) {
				callback(null)
			});
		}		
	}

});
