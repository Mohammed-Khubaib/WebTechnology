var express = require('express');
var app = express();
var fs = require("fs");
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})
var server = app.listen(8080, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s/1", host, port)
    console.log("Example app listening at http://%s:%s/2", host, port)
    console.log("Example app listening at http://%s:%s/3", host, port)
})