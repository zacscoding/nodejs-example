/**
 * gist code : https://gist.github.com/soheilhy/867f76feea7cab4f8a84
 *
 * running :
 * $ mocha calc-test.js
 */

var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈
var calc = require('./calc');

/*
describe('Calculator Tests', function () {
  it('test add', function (done) {
    assert.equal(calc.add(1,2), 3);
    done();
  });

  it('test multiply', function(done) {
    assert.equal(calc.mul(3,2), 6);
    done();
  });
});
  // output
  // Calculator Tests
  //   √ test add
  //   √ test multiply
  //
  //
  // 2 passing (8ms)

*/

describe('Calculator Tests', function () {
  describe('Addition Tests', function () {
    it('returns 1 + 1 = 2', function (done) {
      assert.equal(calc.add(1, 1), 2);
      done();
    });

    it('returns 1 + -1 = 0', function (done) {
      assert.equal(calc.add(1, -1), 0);
      done();
    });
  });

  describe('Multiplication Tests', function () {
    it('returns 2 * 2 = 4', function (done) {
      assert.equal(calc.mul(2, 2), 4);
      done();
    });

    it('returns 0 * 4 = 0', function (done) {
      assert.equal(calc.mul(0, 4), 0);
      done();
    });
  });
});
