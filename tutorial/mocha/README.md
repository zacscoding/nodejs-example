## Mocha tutorial  

> ### Installing mocha

```
$ npm install mocha -g
```  

> ### Running  

```
$ mocha scripts/server-test.js
```  

> ### default

```
var assert = require('assert');

/**
 * Test
 * - describe.only : 해당 suite 실행
 * - describe.skip : 해당 suite 스킵
 * - before | beforeEach | after | afterEach
 */

// describe.only('First test suite', function () {
// describe.skip('First test suite', function () {
describe('First test suite', function () {

  before('Before first test suite', function () {
    console.log('> before first test suite');
  });

  beforeEach('BeforeEach first test suite', function () {
    console.log('> before each first test suite');
  });

  afterEach('AfterEach first test suite', function () {
    console.log('> after each first test suite');
  });

  after('After first test suite', function () {
    console.log('> after first test suite');
  });

  it('First-Test1', function () {
    assert.equal(1, 1);
  });

  it('First-Test2', function () {
    assert.equal(3, 3);
  });
});

describe('Second test suite', function () {
  it('Second-Test1', function () {
    assert.equal(1, 1);
  })
});

/*
First test suite
> before first test suite
> before each first test suite
    √ First-Test1
> after each first test suite
> before each first test suite
    √ First-Test2
> after each first test suite
> after first test suite

  Second test suite
    √ Second-Test1


  3 passing (9ms)
 */

describe('Test async', function () {
  // Error: Timeout of 500ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (C:\git\zaccoding\mocha-tutorial\scripts\mocha-methods.js)
  // this.timeout(500);

  it('Test setTimeout', function (done) {
    setTimeout(function () {
      assert.equal(1, 1);
      done();
    }, 1000);
  });
});
```  

> ### http server test   

```
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
```
