"use strict";

// find unique paths of robot
function uniquePaths(m, n) {

  var table = [];
  for (var i = 0; i < m; i++) {
    table[i] = [];
    for (var j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 1;
      } else {
        table[i][j] = table[i-1][j] + table[i][j-1];
      }
    }
  }

  return table[m-1][n-1];
}

console.log(uniquePaths(3, 3));

module.exports = uniquePaths;
