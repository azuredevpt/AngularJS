var user = require('../models/Utilisateur');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://useradmin:useradmin@cluster0-espkl.mongodb.net/test?retryWrites=true&w=majority";
var Lescollections = ["Utilisateurs", "Restaurants", "Menus","Commandes"]


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Uber4Rd");
  var query = new user.Utilisateur("BonRestaurateur1" , "motPasse1");
  console.log("---------------------");
  console.log(query);
  console.log("---------------------");
  dbo.collection(Lescollections[0]).find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});