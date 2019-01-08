var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/html');
  res.send('<h1>I am your app</h1>');
});

app.listen(process.env.PORT || 3000);