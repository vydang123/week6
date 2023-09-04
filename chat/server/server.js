const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();

// Apply cors middleware to express app
app.use(cors());

// Setup http server with express app
const server = http.createServer(app);

// Setup socket.io with http server
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('newMessage', (msg) => {
    io.emit('newMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
