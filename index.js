var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    io.emit('a user connected');
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

 