var user = require('../../../models/Utilisateur');
var MongoClient = require('mongodb').MongoClient;
var config = require('./../../API/config.json');
var hostname = 'localhost';
var port = config.user_port
var url = config.server_uri
var _db = config.db
var _collection_user = config.user_collection
var _commande_collection =  config.commande_collection
var _collection_restaurant = config.restaurant_collection
var resultat = []
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const path = require('path');
const router = express.Router();

router.get('/hello',function(req,res){
  res.sendFile(path.join(__dirname+'/nouveau.html'));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.use('/', router);


console.log(_commande_collection)

app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("access-control-allow-methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")
      res.header('encoding', 'charset=utf-8');
      next();
});

MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(_db);
      app.get('/auth', function (req, res) {
            res.setHeader('Content-Type', 'application/json');
            //res.end(JSON.stringify({ a: 1 }));
            var user = { "adressemail": req.query.username, "mdp": req.query.mdp }
            console.log(user)
            dbo.collection(_collection_user).find(user).toArray(function (err, result) {
                  if (err) throw err;
                  console.log(result);
                  resultat = result
                  console.log(" resultat " + resultat)
                  //return result
                  //res.json(resultat);
                  if (resultat.length > 0) {
                        //res.sendStatus(200);
                        res.json(resultat);
                  } else {
                        res.sendStatus(403);
                  }

            })
      })

      app.get('/utilisateur', function (req, res) {
            dbo.collection(_collection_user).find("{}").toArray(function (err, result) {
                  if (err) res.sendStatus(500);
                  res.end(JSON.stringify(result))
            })
      })
      app.get('/restaurant/:cp?', function (req, res) {
            var filtre = {}
            if (req.params.cp)
                  filtre = { codepostal: req.params.cp }
            console.log(filtre)
            dbo.collection(_collection_restaurant).find(filtre).toArray(function (err, result) {
                  if (err) res.sendStatus(500);
                  res.end(JSON.stringify(result))
            })
      })
      app.get('/menusrestaurant/:id?', function (req, res) {
            var filtre = {}
            if (req.params.id)
                  filtre = { _id: new require('mongodb').ObjectID(req.params.id) }
            console.log(filtre)
            dbo.collection(_collection_restaurant).find(filtre).toArray(function (err, result) {
                  if (err) res.sendStatus(500);
                  res.end(JSON.stringify(result))
            })
      })
      app.post('/utilisateur', (req, res) => {
            dbo.collection(_collection_user).insertOne(req.body, function (err, resdb) {
                  if (err) res.sendStatus(500)
                  else
                        res.end(JSON.stringify(resdb.ops))
                  console.log("1 document inserted");
                  //res.write({ "nomUtilisateur": req.query.user_name, "motPasse": req.query.mdp })
                  //res.end(JSON.stringify({ a: 1 }));
            });

      })
      app.post('/commandes', (req, res) => {
           
            dbo.collection(_commande_collection).insertOne(req.body, function (err, resdb) {
                  if (err) res.sendStatus(500)
                  else
                        res.end(JSON.stringify(resdb.ops))
                  console.log("1 document inserted");
                  //res.write({ "nomUtilisateur": req.query.user_name, "motPasse": req.query.mdp })
                  //res.end(JSON.stringify({ a: 1 }));
            });

      })

      app.get('/commandes', function (req, res) {
            dbo.collection(_commande_collection).find("{}").toArray(function (err, result) {
                  if (err) res.sendStatus(500);
                  res.end(JSON.stringify(result))
            })
      })
      //PUT
      app.put('/utilisateur', function (req, res) {
            console.log('Ici UN PUT')
            var myquery = { "adressemail": req.body.adressemail };
            var newvalues = { $set: req.body };
            console.log(myquery)
            console.log(newvalues)
            dbo.collection(_collection_user).updateOne(myquery, newvalues, function (err, resdb) {
                  if (err) {
                        console.log(err)
                        res.sendStatus(403)
                  }
                  else
                        res.sendStatus(200)
                  console.log("1 document updateds");

            });


      })
      //DELETE
      app.delete('/utilisateur', function (req, res) {
            var myquery = { "nomUtilisateur": req.body.nomUtilisateur };
            var newvalues = { $set: req.body };
            console.log(myquery)
            console.log(newvalues)
            dbo.collection(_collection_user).deleteOne(myquery, newvalues, function (err, resdb) {
                  if (err) {
                        console.log(err)
                        res.sendStatus(403)
                  }
                  else
                        res.sendStatus(200)
                  console.log("1 document deleted");

            });


      })


      //db.close();
});















console.log('Running at Port 3000');






app.listen(port, function () {
      console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});