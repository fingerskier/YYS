var express = require('express')
, MemoryStore = express.session.MemoryStore
, redis = require('redis')
, pub    = redis.createClient()
, sub    = redis.createClient()
, client = redis.createClient()
, routes = require('./routes')
, socket = require('./routes/socket.js')

, app = module.exports = express()
, server = require('http').createServer(app)
, io = require('socket.io').listen(server)
, parseCookie = require('connect').utils.parseCookie
, sessionStore = new MemoryStore()
, Session = require('connect').middleware.session.Session;

app.configure(function() {
  app.use(express.cookieParser());
  app.use(express.session({store: sessionStore
    , secret: 'secret'
    , key: 'express.sid'
  }));
  app.use(function (req, res) {
      res.end('<h2>Hello, your session id is ' + req.sessionID + '</h2>');
  });
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('*', routes.index);

io.configure(function (){
  io.set('authorization', function (handshakeData, callback) {
    // findDatabyip is an async example function
    findDatabyIP(handshakeData.address.address, function (err, data) {
      if (err) return callback(err);

      if (data.authorized) {
        handshakeData.foo = 'bar';
        for(var prop in data) handshakeData[prop] = data[prop];
        callback(null, true);
      } else {
        callback(null, false);
      }
    })
  });
});
io.set('store', sessionStore);
io.set('authorization', function (data, accept) {
  if (data.headers.cookie) {
    data.cookie = parseCookie(data.headers.cookie);
    data.sessionID = data.cookie['express.sid'];
    sessionStore.get(data.sessionID, function (err, session) {
      if (err || !session) {
        accept('Error', false);
      } else {
        data.session = session;
        accept(null, true);
      }
    });
  } else {
   return accept('No cookie transmitted.', false);
  }
});
io.sockets.on('connection', socket);

server.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});