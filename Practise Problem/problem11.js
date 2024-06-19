// Loop an array and add all members of it

let arr=[1,2,3,4,5]
let total=0
for(let i=0;i<arr.length;i++)
  {
    total=total+arr[i]
  }

console.log(total)

let sum=arr.reduce((prev,curr)=>
{
  return prev+curr
})
console.log(sum)

console.log(3+true)