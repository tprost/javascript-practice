// Node.js tests
var buster = require("buster");
var assert = buster.referee.assert;
var thing = require("../thing.js");

buster.testCase("A module", {
  "states the obvious": function () {
    assert.equals("hello", thing.sayHello());
  }
});
