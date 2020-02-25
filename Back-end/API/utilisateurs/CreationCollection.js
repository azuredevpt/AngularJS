var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://useradmin:useradmin@cluster0-espkl.mongodb.net/test?retryWrites=true&w=majority";

var Lescollections = ["Utilisateurs", "Restaurants", "Menus","Commandes"]



var createCollection = function (collection) {
    console.log(" je suis à  " + collection);

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Uber4Rd");
        dbo.createCollection(collection, function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });

    });

}


for (var i =0; i<Lescollections.length;i++) {
    createCollection(Lescollections[i])
}