// Writ a javascript function to get the number of occurrences of each letter in specified string

function countString(str)
{
  let obj={}
  str.split('').map((letter)=>
  {
    if(obj.hasOwnProperty(letter)===true)
      {
        obj[letter]++
      }
    else{
      obj[letter]=1
    }
  })
  console.log(obj)
}

countString('apple')
countString('hello')