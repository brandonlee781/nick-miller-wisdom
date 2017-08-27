const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const wisdom = require('./wisdom').wisdom;

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  let quote = wisdom[Math.round(Math.random() * wisdom.length) - 1];
  res.json({quote: quote})
})


app.listen(port, () => {
  console.log('Server listening on port ' + port);
})
