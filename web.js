var textBuf = fs.readFileSync('index.html');
var text = textBuf.toString('utf8');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
