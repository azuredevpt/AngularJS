var io = require('socket.io-client');
var socket = io.connect('http://localhost:4000', {reconnect: true});



socket.on('o.pong', function (from, msg) {
   // 
   
    console.log('pong reçu');
    setTimeout(sendPing, 3000);
  });

function sendPing(){
    console.log('ping émis');
    socket.emit("o.ping", 'ping');
    
}


sendPing()
