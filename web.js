var express = require('express');
var fs = require('fs');

var inputfile = "index.html";

var app = express.createServer(express.logger());

var buf = fs.readFileSync(inputfile);



app.get('/', function(request, response) {
  response.send(buf.toString());
});

//var port = process.env.PORT || 5000;

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
