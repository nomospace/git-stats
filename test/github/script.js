var github = new Github({
  username: 'username',
  password: 'password',
  auth: 'basic'
});
var user = github.getUser();
user.repos(function(err, repos) {
  console.dir(repos);
});
