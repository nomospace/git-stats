var GitStats = require('git-stats'),
  config = require('./config');

GitStats.run({user: config.user, pass: config.pass})
  .then(function(results) {
    console.log(results.format(config.format, config.compress));
  })
  .fail(function(e) {
    console.error(e);
  });

