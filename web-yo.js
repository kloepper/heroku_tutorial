var express = require('express');
var logfmt = require('logfmt');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Yo, Heroku!');
});

var port = Number(process.env.PORT || 1763);
app.listen(port, function() {
  console.log("Listening on port " + port);
});
