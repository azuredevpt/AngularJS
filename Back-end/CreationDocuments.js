var user = require('../models/Utilisateur');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://useradmin:useradmin@cluster0-espkl.mongodb.net/test?retryWrites=true&w=majority";
var Lescollections = ["Utilisateurs", "Restaurants", "Menus", "Commandes"]



MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Uber4Rd");

    for (var i = 0; i < 100; i++) {
        var myobj = user1 = new user.Utilisateur("BonRestaurateur" + i, "motPasse" +i, "");
        dbo.collection("Utilisateurs").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");

        });
    }
    db.close();
});