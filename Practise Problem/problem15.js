// Write a Javascript function which accepts an argument and returns the type.

function findType(para)
{
  return (typeof para)
}

console.log(findType('hello'))  //string
console.log(findType(5.0))      //number
console.log(findType(5))        //number
console.log(findType(true))     //Boolean
console.log(findType())         //undefined
console.log(findType({name:'harish'}))       //Object
