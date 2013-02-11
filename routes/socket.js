var account = require('./api/account');

var userNames = (function () {
  var names = {};

  return {
    claim: function (name) {
      if (!name || names[name]) {
        return false;
      } else {
        names[name] = true;
        return true;
      }
    },
    free: function (name) {
      if (names[name]) {
        delete names[name];
      }
    },
    get: function() {
      var res = [];
      for (user in names) {
        res.push(user);
      }

      return res;
    },
    getGuestName: function () {
      var name, nextUserId = 1;

      do {
        name = 'Guest ' + nextUserId;
        nextUserId += 1;
      } while (!claim(name));

      return name;
    }
  };
}());

module.exports = function (socket) {
  var name = userNames.getGuestName();

  socket.on('connection', function (socket) {
      console.log('A socket with sessionID ' + socket.handshake.sessionID
          + ' connected!');
  });

  socket.emit('init', {
    name: name,
    users: userNames.get()
  });

  socket.broadcast.emit('user:join', {
    name: name
  });

  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      user: name,
      text: data.message
    });
  });

  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      var oldName = name;
      userNames.free(oldName);

      name = data.name;

      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });

  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
    userNames.free(name);
  });
};