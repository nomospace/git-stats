module.exports = {
  debug: true,
  name: 'GitStats',
  description: "GitStats is a web application for gitstats and supports many features for manage multiple projects' report.",
  version: '0.0.1',

  sessionSecret: 'git-stats',
  authCookieName: 'git-stats',
  host: '127.0.0.1',
  port: 3002,

  db: 'mongodb://127.0.0.1/git-stats'
};
