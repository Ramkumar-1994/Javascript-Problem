// Write a Javascript function to clone an array

function makeArray(arr)
{
  let newArr=[...arr]
  newArr.push(6)
  console.log(newArr)
  console.log(arr)
}
let arr=[1,2,3,4,5]

makeArray(arr)