

function Game(m, n) {
  // initialize board with zeroes
  this.board = [];
  this.m = m;
  this.n = n;
  for (var i = 0; i < m; i++) {
    this.board.push([]);
    for (var j = 0; j < n; j++) {
      this.board[i].push(0);
    }
  }
};

Game.prototype.set = function(i, j, value) {
  this.board[i][j] = value;
};

Game.prototype.countLiveNeighbors = function(i, j) {
  var neighbors = [];
  var count = 0;
  var board = this.board;
  if (i > 0) {
    neighbors.push([i - 1, j]);
  }
  if (i < this.m - 1) {
    neighbors.push([i + 1, j]);
  }
  if (j > 0) {
    neighbors.push([i, j - 1]);
  }
  if (j < this.n - 1) {
    neighbors.push([i, j + 1]);
  }
  if (i > 0 && j > 0) {
    neighbors.push([i - 1, j - 1]);
  }
  if (i > 0 && j < this.n - 1) {
    neighbors.push([i - 1, j + 1]);
  };
  if (i < this.m - 1 && j > 0) {
    neighbors.push([i + 1, j - 1]);
  }
  if (i < this.m - 1 && j < this.n - 1) {
    neighbors.push([i + 1, j + 1]);
  };
  for (var neighbor of neighbors) {
    var value = board[neighbor[0]][neighbor[1]];
    if (value === 1) count++;
  }
  return count;
}

// run one update to the board
Game.prototype.run = function() {

  var game = this;
  var board = this.board;

  // initialize new board
  var newBoard = [];
  for (var i = 0; i < this.m; i++) {
    newBoard.push([]);
    for (var j = 0; j < this.n; j++) {
      newBoard[i].push(board[i][j]);
    }
  }

  for (var i = 0; i < this.m; i++) {
    for (var j = 0; j < this.n; j++) {
      var live = board[i][j] === 1;
      var liveNeighbourCount = game.countLiveNeighbors(i, j);
      if (live) {
        if (liveNeighbourCount < 2) {
          newBoard[i][j] = 0;
        } else if (liveNeighbourCount > 3) {
          newBoard[i][j] = 0;
        }
      } else if (liveNeighbourCount === 3) {
        newBoard[i][j] = 1;
      }
    }
  }

  this.board = newBoard;

};


var board = new Game(5, 6);

board.set(1, 1, 1);
board.set(1, 2, 1);
board.set(2, 1, 1);


console.log(board);
board.run();
console.log(board);
