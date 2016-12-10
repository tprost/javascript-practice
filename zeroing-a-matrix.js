

// assume that matrix is an m by n two-dimensional array of Numbers
function zeroMatrix(matrix) {

  var m = matrix.length;
  var n = matrix[0].length;

  function zero(i, j) {
    for (var a = 0; a < m; a++) {
      matrix[a][j] = 0;
    }
    for (a = 0; a < n; a++) {
      matrix[i][a] = 0;
    }
  };

  var zeroLocations = [];

  // for each row i
  for (var i = 0; i < m; i++) {
    // for each column j get element x = [i, j]
    for (var j = 0; j < n; j++) {
      var x = matrix[i][j];
      if (x === 0) {
        zeroLocations.push([i, j]);
      }
    }
  }

  for (var location of zeroLocations) {
    zero(location[0], location[1]);
  }

  return matrix;
}

var matrix = [[3, 4, 5],
              [6, 0, 8],
              [9, 8, 7]];

console.log(zeroMatrix(matrix));
