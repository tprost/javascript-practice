// Node.js tests
var buster = require("buster");
var assert = buster.referee.assert;
var refute = buster.referee.refute;
var expect = buster.referee.expect;
var uniquePaths = require("../unique-paths.js");

buster.testCase("function", {
  "returns correct values": function () {
    expect(uniquePaths(1, 1)).toEqual(1);
  }
});
