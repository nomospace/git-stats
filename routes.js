var config = require('./config'),
  brand = config.name;

function index(req, res) {
  res.redirect('/general');
}

function general(req, res) {
  res.render('general', { title: 'General', id: 'general', brand: brand })
}

function activity(req, res) {
  res.render('activity', { title: 'Activity', id: 'activity', brand: brand })
}

function authors(req, res) {
  res.render('authors', { title: 'Authors', id: 'authors', brand: brand })
}

function files(req, res) {
  res.render('files', { title: 'Files', id: 'files', brand: brand })
}

function lines(req, res) {
  res.render('lines', { title: 'Lines', id: 'lines', brand: brand })
}

function tags(req, res) {
  res.render('tags', { title: 'Tags', id: 'tags', brand: brand })
}

function about(req, res) {
  res.render('about', { title: 'About', id: 'about', brand: brand })
}

module.exports = function(app) {
  app.get('/', index);
  app.get('/general', general);
  app.get('/activity', activity);
  app.get('/authors', authors);
  app.get('/files', files);
  app.get('/lines', lines);
  app.get('/tags', tags);
  app.get('/about', about);
};
