// In a Array of numbers and strings,only add those Members which are not strings

let array=[1,2,3,'hello','hey',8]

let sum=0

array.map((elem)=>
{
  if(typeof elem==='number')
    {
      sum=sum+elem
    }
})

console.log(sum)