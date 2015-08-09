'use strict';

var grunt = require('grunt');
var fs = require('fs');
var ngAttrHint = require('ng-attr-hint');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ngAttrHint = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
	test.expect(1);

    var actual = fs.readFileSync('test/tmp/default_options.txt', 'utf8');
    var expected = fs.readFileSync('test/expected/default_options.txt', 'utf8');
    test.equals(actual, expected);

    test.done();
  }, 
  custom_options: function (test) {
    test.expect(1);

    var actual = fs.readFileSync('test/tmp/custom_options.txt', 'utf8');
    var expected = fs.readFileSync('test/expected/custom_options.txt', 'utf8');
    test.equals(actual, expected);

    test.done();
  } 
};
