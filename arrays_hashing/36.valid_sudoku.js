/*
36. Valid Sudoku - Difficulty: Medium
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map(); // key = (r / 3) * 3 + c / 3

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === '.') continue; // Bỏ qua các ô trống

      // Kiểm tra trùng lặp trong hàng, cột và ô vuông con
      if (
          rows.get(r)?.has(cell) || // Trùng lặp trong hàng
          cols.get(c)?.has(cell) || // Trùng lặp trong cột
          squares
              .get(Math.floor(r / 3) * 3 + Math.floor(c / 3))
              ?.has(cell) // Trùng lặp trong ô vuông con
      ) {
          return false;
      }

      // Cập nhật giá trị trong hàng, cột và ô vuông con
      cols.set(c, new Set(cols.get(c)).add(cell));
      rows.set(r, new Set(rows.get(r)).add(cell));
      squares.set(
          Math.floor(r / 3) * 3 + Math.floor(c / 3),
          new Set(
              squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3)),
          ).add(cell),
      );
    }
  }
  return true;
};

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]))