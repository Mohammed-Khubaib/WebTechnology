var express = require ('express');
var app = express();

app.get('/',function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('Hello GET')
});
app.post('/',function(req, res){
    console.log("Got a POST request for the homepage");
    res.send('Hello POST')
});
app.delete('/del_user',function(req, res){
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE')
});
app.get('/list_users',function(req, res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listening')
});
app.get('/ab*cd',function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match')
});

var server = app.listen(8080, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s/", host, port);
    console.log("List User at http://%s:%s/list_users", host, port);
    console.log("Delete User at http://%s:%s/del_user", host, port);
    console.log("Pattern Match : http://%s:%s/abcd", host, port);
});

