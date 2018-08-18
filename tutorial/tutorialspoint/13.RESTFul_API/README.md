## Install

```
$ npm install express --save  
$ npm install body-parser --save
```

> rest-server.js  

```
var express = require('express');

var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var users = [];

http://localhost:8081/users
app.get('/users', function (req, res) {
    res.send(JSON.stringify(users));
});

// http://localhost:8081/2
app.get('/:id', function (req, res) {
    var requestId = req.params.id;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        console.log('Check user id : ' + i);
        if (user.id == requestId) {
            console.log('Find user!!');
            res.send(JSON.stringify(user));
            return false;
        }
    }

    console.log('Not found...');
    return res.send('Not exist : ' + requestId);
});

// http://localhost:8081/add
app.post('/add', function (req, res) {
    var user = req.body;
    console.log('request user : ', user);
    users.push(user);
    res.send(JSON.stringify(user));
});

var server = app.listen(8081, function () {
    console.log('Example app', server.address());

    fs.readFile('user.json', 'utf8', function (err, data) {
        users = JSON.parse(data);
        console.log('Read users.\n', users);
    });
});
```

---  

https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm