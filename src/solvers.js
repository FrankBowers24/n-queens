/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({
    n: n
  });
  board.rows().map(function(row, i) {
    row[i] = 1;
    return row;
  });

  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({
    n: n
  });

  var solutionCount = 0;

  var findSolution = function(board, rowIndex) {
    if (!board.hasAnyRooksConflicts()) {
      if (rowIndex === n) {
        solutionCount++;
      } else {
        for (var i = 0; i < n; i++) {
          board.togglePiece(rowIndex, i);
          findSolution(board, rowIndex + 1);
          board.togglePiece(rowIndex, i);
        }
      }
    }
  };

  findSolution(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({
    n: n
  });
  var solution = board;
  var solutionFound = false;

  var findSolution = function(board, rowIndex) {
    if (!solutionFound && !board.hasAnyQueensConflicts()) {
      if (rowIndex === n) {
        solution = board.clone();
        solutionFound = true;
      } else {
        for (var i = 0; i < n; i++) {
          board.togglePiece(rowIndex, i);
          findSolution(board, rowIndex + 1);
          board.togglePiece(rowIndex, i);
        }
      }
    }
  };

  findSolution(board, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution && solution.rows();
};


window.setCol(conflicts, col, n) {
  for (var row = 0; row < n; row++ ) {

  }
}

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var conflicts = {};

  /*var board = new Board({
    n: n
  });

  var solutionCount = 0;

  var findSolution = function(board, rowIndex) {
    if (!board.hasAnyQueensConflicts()) {
      if (rowIndex === n) {
        solutionCount++;
      } else {
        for (var i = 0; i < n; i++) {
          board.togglePiece(rowIndex, i);
          findSolution(board, rowIndex + 1);
          board.togglePiece(rowIndex, i);
        }
      }
    }
  };

  findSolution(board, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);*/
  return solutionCount;
};
