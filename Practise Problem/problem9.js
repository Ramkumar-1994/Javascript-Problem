// Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase

function changeFirstLetter(str)
{
  let allwords=str.split(' ').map((word)=>
  {
    return word.charAt(0).toUpperCase()+word.substring(1)
  })
  console.log(allwords.join(' '))
}

changeFirstLetter('how are you ')

