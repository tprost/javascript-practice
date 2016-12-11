// Node.js tests
var buster = require("buster");
var assert = buster.referee.assert;
var refute = buster.referee.refute;
var expect = buster.referee.expect;
var permutations = require("../permutations.js");


var testCases = [

  {
    input: [1, 2],
    output: [[1, 2], [2, 1]]
  },
  {
    input: [1, 1, 2, 2],
    output: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1],
             [2, 1, 1, 2], [2, 1, 2, 1], [2, 2, 1, 1]]
  }

];

// buster.testCase("getPermutations()", {
//   "returns all permutations": function () {

//     for (var test of testCases) {
//       var output = permutations.getPermutations(test.input);
//       expect(output).toEqual(test.output);


//     }

//   }
// });
