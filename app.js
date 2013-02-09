var express = require('express');
var redis = require('redis');
var routes = require('./routes');
var socket = require('./routes/socket.js');

var app = module.exports = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.configure(function() {
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

io.sockets.on('connection', socket);

server.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});