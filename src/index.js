const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const wisdom = require('./wisdom').wisdom;

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  let quote = wisdom[Math.round(Math.random() * wisdom.length)];
  res.send(quote)
})


app.listen(port, () => {
  console.log('Server listening on port 3000');
})
