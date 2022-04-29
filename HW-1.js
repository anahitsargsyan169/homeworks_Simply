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
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
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
  const rows = Array.from({length},()=>[]);
  const columns = Array.from({length},()=>[]);
  const subGrids = Array.from({length},()=>[]);

  for (let r = 0; r < length; r++) {
    for (let c = 0; c < length; c++) {
      const cell = grid[r][c]
      if(cell === '.') continue;
      
      const subIndex = Math.floor((r / 3)) * 3 + Math.floor(c / 3);
      if (rows[r].includes(cell) || columns[c].includes(cell) || subGrids[subIndex].includes(cell)) 
        return false
      
      rows[r].push(cell);
      columns[c].push(cell);
      subGrids[subIndex].push(cell);
    }
  }
  return true;

  // return grid.every((row,rowIndex)=>{
  //   return row.every((_,columnIndex)=>{
  //     const cell = grid[rowIndex][columnIndex]
  //     if(cell === '.') return true;
      
  //     const subIndex = Math.floor((rowIndex / 3)) * 3 + Math.floor(columnIndex / 3);
  //     if (rows[rowIndex].includes(cell) || columns[columnIndex].includes(cell) || subGrids[subIndex].includes(cell)) 
  //       return false
      
  //     rows[rowIndex].push(cell);
  //     columns[columnIndex].push(cell);
  //     subGrids[subIndex].push(cell);
  //     return true
  //   })
  // })

}

console.log(solution(grid1)); // true
console.log(solution(grid2)); // false
