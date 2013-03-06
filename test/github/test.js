var config = require('../../config'),
  express = require('express'),
  http = require('http'),
  path = require('path');

var app = express(),
  host = config.host,
  port = 4000;

app.configure(function() {
  app.set('port', port);
  app.set('views', __dirname);
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname));
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('test', {title: 'Test', id: 'test'})
});

http.createServer(app).listen(port, function() {
  console.log(host + ':' + port);
});
