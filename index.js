//Server npm package
// Include the server in your file
// const server = require('server');
// const { get, post } = server.router;

// // Handle requests to the url "/" ( http://localhost:3000/ )
// server([
//   get('/', ctx => 'Hello world!')
// ]);

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  app.use('/public', express.static('public'))
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
        io.emit('chat message', msg);
    });
  });

server.listen(20860, () => {
  console.log('listening on *:20860');
});