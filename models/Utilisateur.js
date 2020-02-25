//var Utilisateur = function(nomUtilisateur,motPasse,typeUtilisateur){
var Utilisateur = function(utilisateur, motPasse,typeUtilisateur){

    this.nomUtilisateur= utilisateur;
    this.motPasse= motPasse;
    this.typeUtilisateur= "none";

    this.seConnecter = function (callBack) {
        console.log("con " +this.typeUtilisateur)
    this.motPasse= motPasse;
        console.log(callBack.seConnecter(this.nomUtilisateur, this.motPasse))
    };
    this.seDeConnecter = function (callBack) {
        console.log(callBack.seDeConnecter(this.nomUtilisateur))
        console.log("dec " + this.typeUtilisateur)
    }


};

var Livreur = function(){
 
    this.typeUtilisateur= "Livreur";
};

Livreur.prototype = new Utilisateur()
//var livreur = utilisateur.pro

exports.Utilisateur = Utilisateur; 
exports.Livreur = Livreur; 
//exports.Utilisateur = Livreur;