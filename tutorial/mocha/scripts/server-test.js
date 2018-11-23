var http = require('http');
var assert = require('assert');

var server = require('./server.js');

describe('HTTP Server Test', function () {
  before(function () {
    console.log('setUp test');
    server.listen(8989);
  });

  after(function () {
    console.log('tearDown test');
    server.close();
  });

  describe('/', function () {
    it('should be Hello, Mocha', function (done) {
      http.get('http://localhost:8989', function (response) {
        assert.equal(response.statusCode, 200);

        var body = '';
        response.on('data', function (d) {
          body += d;
        });

        response.on('end', function () {
          assert.equal(body, 'Hello, Mocha');
          done();
        });
      });
    });
  });
});
