// https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
// load http module & return http instance
var http = require("http");

http.createServer(function (request, response) {
	// Send the HTTP header
	// HTTP Status : 200 : OK
	// Content type : text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// Send the response body as "Hello World"
	response.end('Hellow World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
