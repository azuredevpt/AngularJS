myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./Uber.Accueil/partial.Accueil.html",
			controller: "AccueilCtrl"
		})
		.when("/restaurants/:codePostal?", {
			templateUrl: "./Uber.RechercheRestaurant/partial.RechercheRestaurant.html",
			controller: "RechercheRestaurantCtrl"
		})
		.when("/profile/:idRestaurant?", {
			templateUrl: "./Uber.ProfileRestaurant/partial.profileRestaurant.html",
			controller: "ProfileRestaurantCtrl"
		})
		.when("/login/:status?", {
			templateUrl: "./Uber.Login/partial.login.html",
			controller: "LoginCtrl"
		})
		.when("/register", {
			templateUrl: "./Uber.Register/partial.register.html",
			controller: "RegisterCtrl"
		})
		.when("/info", {
			templateUrl: "./Uber.Info/partial.info.html",
			controller: "InfoCtrl"
		})
		.when("/commandes", {
			templateUrl: "./Uber.Commandes/partial.commandes.html",
			controller: "CommandesCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
});