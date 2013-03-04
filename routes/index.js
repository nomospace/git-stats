var config = require('../config'),
  brand = config.name;

exports.index = function(req, res) {
  res.redirect('/general');
};
exports.general = function(req, res) {
  res.render('general', { title: 'General', id: 'general', brand: brand })
};
exports.activity = function(req, res) {
  res.render('activity', { title: 'Activity', id: 'activity', brand: brand })
};
exports.authors = function(req, res) {
  res.render('authors', { title: 'Authors', id: 'authors', brand: brand })
};
exports.files = function(req, res) {
  res.render('files', { title: 'Files', id: 'files', brand: brand })
};
exports.lines = function(req, res) {
  res.render('lines', { title: 'Lines', id: 'lines', brand: brand })
};
exports.tags = function(req, res) {
  res.render('tags', { title: 'Tags', id: 'tags', brand: brand })
};
exports.about = function(req, res) {
  res.render('about', { title: 'About', id: 'about', brand: brand })
};
