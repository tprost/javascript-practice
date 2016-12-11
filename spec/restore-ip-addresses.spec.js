var buster = require("buster");
var assert = buster.referee.assert;
var refute = buster.referee.refute;
var expect = buster.referee.expect;
var restore = require("../restore-ip-addresses.js");


buster.testCase("restoreIpAddresses", {
  "1111": function () {
    expect(restore.restoreIpAddresses("1111")).toEqual(["1.1.1.1"]);
  },
  "not a string": function() {
    assert.exception(function() {
      return restore.restoreIpAddresses(34);
    }, { name: "TypeError" });
  }
});
