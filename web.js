var express = require('express');
var app = express();
var fs = require('fs');
var data = ();

fs.readFile("index.html", "utf-8", function (err, data))
{
if (err) throw err;
console.log(data.toString);
});

app.use(express.logger());

app.get('/', function(request, response) {
   response.send(console.log(data.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
