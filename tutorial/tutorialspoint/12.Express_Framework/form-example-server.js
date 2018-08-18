var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/form.htm', function (req, res) {
    res.sendFile(__dirname + '/' + 'form.htm');
});

app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log('Response :\n', response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    console.log('Example app', server.address());
});