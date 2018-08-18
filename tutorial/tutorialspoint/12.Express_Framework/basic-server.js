var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('request /');
    console.log(req);
    console.log(res);
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    console.log('Example app', server.address());
});