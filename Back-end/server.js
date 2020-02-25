
var http = require('http');
var dt = require('./DateModule');
var user = require('../models/Utilisateur');
var url = require('url');
var fs = require('fs');

/* http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! il est :' + dt.myDateTime());
}) */

/* var myserver = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
  })
 */

/*
var myserver = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   var q = url.parse(req.url, true).query;
   var txt = q.year + " " + q.month;
   res.end(txt);
 })
*/


/*
var myserver = http.createServer(function (req, res) {
    fs.readFile('../index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  })
*/

/*
var myserver = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    
    var filename = "../" + q.query.pathname;
    //console.log(filename);
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  })
*/

var callback = {
        seConnecter: function (user,mdp) {
            console.log("SeConnecter "+user)
         },
         seDeConnecter: function (user) {
             console.log("seDeConnecter")
         }
    }
   




//myserver.listen(3000);
console.log("Le serveur est à l'écoute");
 
 
user1 = new user.Utilisateur("BonRestaurateur","motPasse","")
user1.seConnecter(callback)
user1.seDeConnecter(callback)

user2 =  new user.Livreur()
user2.nomUtilisateur ="unLivreur"
user2.seConnecter(callback)
user2.seDeConnecter(callback)
//user.seDeConnecter(callback)

