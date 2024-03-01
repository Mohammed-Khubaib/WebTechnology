var http = require('http');
var dt = require('./13_b');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The Current Time and Date: " + dt.myDateTime());
    res.end();
});

server.listen(8080, function() {
    console.log('Server is running at http://localhost:8080/');
});
