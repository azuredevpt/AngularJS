var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



io.on('connection', function (socket) {
  console.log('a user connected');


  socket.on('uber.msg', function (message) {
    console.log(message)
    socket.broadcast.emit('uber.msg', message);
  });

  socket.on('o.ping', function (message) {

    socket.emit('o.pong', message);
    console.log("Ping reçu")
  });


  socket.on('o.init', function (nom) {
    socket.name = nom
    socket.emit('o.pong', "Merci " + nom);
    console.log("Ping reçu")
  });

});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


function go() {
  while (true) {
    readline.question(`Tapez Parler avec qui ?`, (name) => {
      console.log(`Hi ${name}!`)
      readline.close()
    })
  }

}
http.listen(4000, function () {
  console.log('listening on *:4000');
  //go()
});