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

buster.testCase("hasAllUniqueCharacters2()", {
  "returns true when it does": function () {
    assert(thing.hasAllUniqueCharacters2("abcdefgh"));
  },
  "returns false when it doesn't": function() {
    refute(thing.hasAllUniqueCharacters2("abcdefgah"));
  }
});

buster.testCase("reverse()", {
  "should reverse a three letter word": function () {
    assert.equals(thing.reverse("cat"), "tac");
  },
  "should reverse a one letter word": function () {
    assert.equals(thing.reverse("a"), "a");
  }
});
