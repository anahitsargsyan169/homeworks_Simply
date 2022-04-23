const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

const matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

// You can use more than one functions

// 1. Rotate any matrix

const rotate90Degree = (matrix) => {
  const newMatrix = []
  const {length} = matrix;
  matrix[0].forEach((column,columnIndex) => {
      const matrixRow = [];
      matrix.forEach((row,rowIndex) => {
      matrixRow.push(matrix[length-rowIndex-1][columnIndex])
      })
      newMatrix.push(matrixRow)
  })
  return newMatrix
};

// 2. Rotate all matrix elements except the diagonals
const rotateWithoutDiagonal = (matrix) => {
  const newMatrix = [];
  const {length} = matrix;
  matrix.forEach((row,rowIndex) => {
      const matrixRow = [];
      row.forEach((column,columnIndex) => {
          if(rowIndex === columnIndex || (rowIndex+columnIndex) === length-1) {
              matrixRow.push(matrix[rowIndex][columnIndex])
          } else {
              matrixRow.push(matrix[length-columnIndex-1][rowIndex])
          }
      })
      newMatrix.push(matrixRow)
  })
  return newMatrix
};

const calculateRotationNumber = (deg) => {
  if (deg % 90 !== 0) {
      throw new RangeError('Incorrect value')
  }
  return ((deg % 360) + 360) % 360 / 90
}

// Call rotate function. If arg is a square matrix, it will be rotated without diagonals.

const rotate = (matrix, deg) => {
  const count = calculateRotationNumber(deg)
  const rotateFunc = matrix.length === matrix[0].length? rotateWithoutDiagonal : rotate90Degree
  return Array.from({ length: count }).reduce((acc) => {
      return rotateFunc(acc)
  }, matrix)
}

// console.log(rotate(matrix1,180))
// console.log(rotate(matrix2,-90))
// console.log(rotate(matrix3,90))