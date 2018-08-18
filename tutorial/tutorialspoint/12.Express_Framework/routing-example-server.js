var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Get "/" GET request.');
    res.send('Hello Get "/"');
});

app.post('/', function (req, res) {
    console.log('Get "/" POST request.');
    res.send('Hello POST "/"');
});

app.delete('/del_user', function (req, res) {
    console.log('Get "/del_user" DELETE request.');
    res.send('Hello DELETE "/del_user"');
});

app.get('/list_user', function (req, res) {
    console.log('Get "/list_user" GET request.');
    res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log('Get "/ab*cd" Get request.');
    res.send('Page pattern Match');
});

var server = app.listen(8081, function () {
    console.log('Example routing app', server.address());
});


