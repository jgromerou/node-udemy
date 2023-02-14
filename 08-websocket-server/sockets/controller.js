const socketController = (socket) => {
  console.log('Cliente Conectado', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);
  });

  socket.on('enviar-mensaje', (payload, callback) => {
    // console.log('Enviar mensaje desdes el Server');
    // console.log(payload);

    const id = 123456;

    callback(id);

    socket.broadcast.emit('enviar-mensaje', payload);
  });
};

module.exports = {
  socketController,
};
