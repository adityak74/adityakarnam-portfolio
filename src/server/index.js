const express = require('express');
const os = require('os');
const Instagram = require('instagram-web-api');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getInstagramPhotosByUsername', (req, res) => {
  const client = new Instagram({ username: '', password: '' });
  return client
    .getPhotosByUsername({ username: 'tootemukhde' })
    .then((responseData) => {
      res.send({ data: responseData });
    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
