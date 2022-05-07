// Sorting without comparison of elements
// All the elements in the array are integers

const sort = (input) => {
  const min =  Math.min(...input)
  const sortedArray = []
  const numsArray = []
  input.forEach(int => {
    if(!numsArray[int-min]) numsArray[int-min]=[]
    numsArray[int-min].push(int)
  })
  numsArray.forEach((int)=>{
    sortedArray.push(...int)
  })
  return sortedArray
};

console.log(sort([2,0,5,8,-6,1,3,4,5,99,-44,64,4,-35,34,-35,124,34,500]))
