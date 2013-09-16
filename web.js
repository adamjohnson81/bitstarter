var express = require('express');
var app = express();
fs = require('fs');
var hello = fs.readfile(index.html)

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
