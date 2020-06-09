import socketio from 'socket.io-client';

const socket = socketio('http://172.20.10.6:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
};

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
  // TEST WITH BACKEND
  // socket.on('message', text => {
  //   console.log(text);
  // })
};

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
};

export {
  connect,
  disconnect,
  subscribeToNewDevs
};
