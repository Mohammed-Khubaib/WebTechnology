var http = require('http')
var dt = require('./13_b')
http.createServer(function(req,res){
    res.writeHead(200,{'ContentType':'Text/html'})
    res.write("The Current Time and Date : "+dt.myDateTime())
    res.end();
}).listen(8080)