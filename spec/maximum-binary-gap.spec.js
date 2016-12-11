// Node.js tests
var buster = require("buster");
var assert = buster.referee.assert;
var refute = buster.referee.refute;
var expect = buster.referee.expect;
var getMaximumBinaryGap = require("../maximum-binary-gap.js");

buster.testCase("getMaximumBinaryGap", {
  "returns correct values": function () {

    expect(getMaximumBinaryGap(9)).toEqual(2);
  }
});
