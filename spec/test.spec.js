// Node.js tests
var buster = require("buster");
var assert = buster.referee.assert;
var refute = buster.referee.refute;
var thing = require("../thing.js");

buster.testCase("hasAllUniqueCharacters()", {
  "returns true when it does": function () {
    assert(thing.hasAllUniqueCharacters("abcdefgh"));
  },
  "returns false when it doesn't": function() {
    refute(thing.hasAllUniqueCharacters("abcdefgah"));
  }
});
