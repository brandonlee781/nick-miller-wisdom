const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const wisdom = require('./wisdom').wisdom;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  let quote = wisdom[Math.round(Math.random() * wisdom.length)];
  res.send(quote)
})


app.listen($PORT, () => {
  console.log('Server listening on port 3000');
})
