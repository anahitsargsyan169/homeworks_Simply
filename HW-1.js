// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column,
// each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.
// Note that the puzzle represented by grid does not have to be solvable.

// the output should be true
const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  ["2", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

// the output should be false
const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function solution(grid) {
  const {length} = grid;
  const obj = {}
  for(let r = 0; r < length; r++){
    for(let c = 0; c < length; c++){
      const cell = grid[r][c]
      if(cell === '.') continue;
      const subGrid = Math.floor((r / 3)) * 3 + Math.floor(c / 3);
      if(obj[`row${r} ${cell}`] || obj[`column${c} ${cell}`] || obj[`subGrid${subGrid} ${cell}`]) return false
      obj[`row${r} ${cell}`] = true
      obj[`column${c} ${cell}`] = true
      obj[`subGrid${subGrid} ${cell}`] = true
    }
  }
  return true
}

console.log(solution(grid1)); // true
console.log(solution(grid2)); // false