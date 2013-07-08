var http = require('http'),
    fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());


// Root directory
app.get('/', function(request, response) {
    var out = fs.readFileSync('./index.html', 'utf8');
    response.send(out);
});


// Start application
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
