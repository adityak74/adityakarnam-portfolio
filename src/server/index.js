const express = require('express');
const os = require('os');
const npmApi = require('npm-api');
const Instagram = require('instagram-web-api');
const async = require('async');
const agent = require('superagent');

const app = express();
const NPM_API_REPO_INFO_URL = 'https://api.npmjs.org/downloads/point/last-month/';

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

const getRepoDataFromRepoNames = repo => cb => agent
    .get(`${NPM_API_REPO_INFO_URL}${repo}`)
    .end((err, response) => {
      if (err) return cb(err);
      return cb(null, response.body);
    });

app.get('/api/getInstagramPhotosByUsername', (req, res) => {
  const client = new Instagram({ username: '', password: '' });
  return client
    .getPhotosByUsername({ username: 'tootemukhde' })
    .then((responseData) => {
      res.send({ data: responseData });
    });
});

app.get('/api/getNpmProjectsByUsername', async (req, res) => {
  const npmUsername = req.query.username || 'adityak74';
  const npm = new npmApi();
  const maintainer =  npm.maintainer(npmUsername);
  try {
    const repos = await maintainer.repos();
    async.parallel(repos.map(getRepoDataFromRepoNames), (err, results) => {
      if (err) return res.status(400).send('error');
      return res.send(results);
    });
  } catch(err) {
    if (err) return res.status(400).send('error');
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
