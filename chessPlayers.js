// We have number of chess players and some finished matches,
// you should write a function and find out which players should play together

// The matches should be returned in an sorted array, with each match stored as [m-i, m-j], where m-i < m-j

// Example
// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]
// the output should be
// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]

const solution = (chessPlayers, finishedMatches) => {
  const matches = Array.from({length:chessPlayers-1},()=>[])
  const unplayedMatches = []
  finishedMatches.forEach(arr => {
    arr.sort((a,b)=>a-b)
    matches[arr[0]][arr[1]] = true
  });
  for(let i = 0; i < chessPlayers-1; i++){
    for(let j = i+1; j < chessPlayers; j++){
      if(!matches[i][j]) unplayedMatches.push([i,j])
    }
  }
  return unplayedMatches
};

console.log(solution(4, [[0, 1], [1, 2], [2, 0]]))