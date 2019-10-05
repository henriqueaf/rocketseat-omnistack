const connectedUsers = {};

const configure = socketIoInstance => {
  socketIoInstance.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;

    socket.emit('hello', 'World');
  });

  return connectedUsers;
};

module.exports = {
  configure,
};
