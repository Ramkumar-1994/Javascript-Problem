// Write an function to reverse a num

function reverseNum(number)
{
  number=String(number).split('').reverse().join('')
  console.log(Number(number))
}

reverseNum(325)
reverseNum(245789464)
reverseNum(128)

function numReverse(num)
{
  let rev=0
  while(num>0)
    {
      let rem=num%10
      rev=rev*10+rem
      num=Math.floor(num/10)
    }
  console.log(rev)
}

numReverse(89746)