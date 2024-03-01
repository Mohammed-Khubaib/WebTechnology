var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(8080, function () {
    console.log('Server is running at http://localhost:8080/');
});
