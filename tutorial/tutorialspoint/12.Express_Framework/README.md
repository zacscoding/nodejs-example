## Express overview  

- Allows to set up middlewares to respond to HTTP Requests
- Defines a routing table (HTTP Method & URL)   
- Allows to dynamically render HTML Pages

## Installing Express  

> Express  

```
$npm install express --save  
```

> body-parser  
handling JSON, Raw, Text and URL encoded from data  

```
$ npm install body-parser --save
```  

> cookie-parser  
Parse cookie header and populate req.cookies with an object keyed by the cookie names  

```
$ npm install cookie-parser --save
```

> multer  
handling multipart/form-data  

```
$ npm install multer --save
```  

## Hello World Example  

> basic-server.js  

```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    console.log('Example app', server.address());
});
```  

## Basic Routing  

> routing-example-server.js  

## Serving static files  
;Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc  

```
PUBLIC
└─images
└──logo.png
```  

> static-file-example-server.js  

```
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(8081, function () {
    console.log('Example app', server.address());
});
```

```
http://localhost:8081/images/logo.png
```  

## Form example  

> form-example-server.js  

```
http://127.0.0.1:8081/form.htm
```  

## File upload  

> file-upload-example-server.js  
Not working now  

## Cookie Management  

> cookie-manage-server.js  


---  

https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm









