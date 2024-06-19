// Write a javascript function that returns a passed string with letters in alphabetical order

function sortString(str)
{
  return str.split('').sort().join('')
}

console.log(sortString('harsh'))