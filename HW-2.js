// Once upon a time, in a kingdom far, far away, there lived a King Byteasar I.
// As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant.
// One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws!
// In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?

// The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way).
// He personally prepared the roadRegister of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams,
// i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he has decreed must check his calculations.

// Attached file HW-2_photo.png

// the output should be true
const roadRegister1 = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
  [false, true, false, false, false, false, false],
  [true, false, false, false, false, false, false],
  [false, false, false, true, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, false, false, true],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister3 = [
  [false, true, false],
  [false, false, false],
  [true, false, false],
];

function solution(roadRegister) {
  // Implementation

  const {length} = roadRegister;
  const incomingRoadsNumber = Array.from({length},()=>0)
  const outgoingRoadsNumber = Array.from({length},()=>0)

  // for (let r = 0; r < length; r++) {
  //   for (let c = 0; c < length; c++) {
  //       if(roadRegister[r][c]) outgoingRoadsNumber[r]++
  //       if(roadRegister[c][r]) incomingRoadsNumber[r]++
  //   }
  //   if(incomingRoadsNumber[r] !== outgoingRoadsNumber[r]) return false
  // }
  // return true

  return roadRegister.every((road, rIndex)=>{
    road.forEach((_,cIndex)=>{
      if(roadRegister[rIndex][cIndex]) outgoingRoadsNumber[rIndex]++
      if(roadRegister[cIndex][rIndex]) incomingRoadsNumber[rIndex]++
    })
    if(incomingRoadsNumber[rIndex] === outgoingRoadsNumber[rIndex]) return true
  })
}

console.log(solution(roadRegister1)) // true
console.log(solution(roadRegister2)) // true
console.log(solution(roadRegister3)) // false