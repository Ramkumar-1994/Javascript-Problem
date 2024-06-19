// Check whether string is Palindrome or not

function checkPalindrome(str)
{
  if(str.toLowerCase()===str.split('').reverse().join('').toLowerCase())
    {
      console.log('Palindrome')
    }
  else{
    console.log('Not a Palindrome')
  }
}

checkPalindrome('Madam')
checkPalindrome('Mam')
checkPalindrome('act')