var routes = require('./routes');
var config = require('./config');
var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var accessLogfile = fs.createWriteStream('access.log', {flags: 'a'});
var errorLogfile = fs.createWriteStream('error.log', {flags: 'a'});

var app = express(),
  appRoot = './' || __dirname,
  env = config.debug ? 'development' : 'production',
  host = config.host,
  port = config.port || process.env.PORT || 3000;

app.configure(function() {
  app.set('port', port);
  app.set('views', appRoot + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.logger({stream: accessLogfile}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(config.authCookieName));
  app.use(express.session({secret: config.sessionSecret}));
  app.use(app.router);
  app.use(require('less-middleware')({src: appRoot + '/public'}));
  app.use(express.static(path.join(appRoot, 'public')));
  routes(app);
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(function(err, req, res, next) {
    var meta = '[' + new Date() + '] ' + req.url + '\n';
    errorLogfile.write(meta + err.stack + '\n');
    next();
  });
});

http.createServer(app).listen(port, function() {
  console.log("GitStats listening on port %d in %s mode", port, env);
  console.log("God bless love....");
  console.log("You can debug your app with http://" + host + ':' + port);
});
