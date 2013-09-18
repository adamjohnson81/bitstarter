var express = require('express');
var app = express();
var fs = require('fs');

var test = fs.readFileSync('./test.txt', 'utf-8');
response.send (test);



app.use(express.logger());

//app.get('/', function(request, response) {
  // response.send('Hello world2');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
