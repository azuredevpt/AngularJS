//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  

// Nous définissons ici les paramètres du serveur.
var user = require('../../../models/Utilisateur');
var MongoClient = require('mongodb').MongoClient;
var config = require('./../../API/config.json');



var hostname = 'localhost';


// Nous créons un objet de type Express. 


var port = config.auth_port
var url = config.server_uri
var _db = config.db
var _collection = config.user_collection
var resultat = []


const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(_db);
  var query = user


  //app.use(require('connect').bodyParser());

  // Je vous rappelle notre route (/piscines).  

    app.get('/auth',function (req, res) {
      res.setHeader('Content-Type', 'application/json');
      //res.end(JSON.stringify({ a: 1 }));
      var user = { "nomUtilisateur": req.query.user_name, "motPasse": req.query.mdp }
      console.log(user)
      dbo.collection(_collection).find(user).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        resultat = result
        console.log(" resultat " + resultat)
        //return result
        //res.json(resultat);
        if (resultat.length > 0) {
          res.sendStatus(200);
        } else {
          res.sendStatus(403);
        }
       
      })
    })
    app.post('/auth', (req, res) =>{
      //res.setHeader('Content-Type', 'application/json');

      
      //res.end(JSON.stringify({ a: 1 }));
      //res.json({ message: "Ajoute une nouvelle piscine à la liste", methode: req.method });
      console.log("++++++++++++++++++++")
      console.log(req.body)
      console.log("++++++++++++++++++++")
      dbo.collection(_collection).insertOne(req.body, function (err, resdb) {
        if (err) res.sendStatus(403)
        else
        res.end(JSON.stringify(resdb.ops))
        console.log("1 document inserted");
        //res.write({ "nomUtilisateur": req.query.user_name, "motPasse": req.query.mdp })
        //res.end(JSON.stringify({ a: 1 }));
    });

    })
    //PUT
    app.put('/auth',function (req, res) {
      res.json({ message: "Mise à jour des informations d'une piscine dans la liste", methode: req.method });
      dbo.collection(_collection).insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    });

    
    })



  //db.close();
});

app.listen(port, hostname, function () {
  console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});