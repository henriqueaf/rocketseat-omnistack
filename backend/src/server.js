const express = require('express');
const mongooseConfig = require('./config/mongooseConfig');
const webSocketConfig = require('./config/webSocket');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const socketIoInstance = socketio(server);
mongooseConfig.configure();

const connectedUsers = webSocketConfig.configure(socketIoInstance);

app.use((req, res, next) => {
  req.socketIoInstance = socketIoInstance;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
