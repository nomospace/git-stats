var routes = require('./routes'),
  config = require('./config'),
  express = require('express'),
  http = require('http'),
  path = require('path');

var app = express(),
  appRoot = './' || __dirname,
  host = config.host,
  port = config.port || process.env.PORT || 3000;

app.configure(function() {
  app.set('port', port);
  app.set('views', appRoot + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(config.authCookieName));
  app.use(express.session({secret: config.sessionSecret}));
  app.use(app.router);
  app.use(require('less-middleware')({src: appRoot + '/public'}));
  app.use(express.static(path.join(appRoot, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/general', routes.general);
app.get('/activity', routes.activity);
app.get('/authors', routes.authors);
app.get('/files', routes.files);
app.get('/lines', routes.lines);
app.get('/tags', routes.tags);
app.get('/about', routes.about);

http.createServer(app).listen(port, function() {
  console.log(host + ':' + port);
});
