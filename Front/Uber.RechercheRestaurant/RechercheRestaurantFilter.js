myApp.filter("tpslivraison", function(){
	return function(str){
		return str + " min de temps de livraison";
	}
});