// Given a string,reverse each word in a sentence

let sentence="Hey! How are you? Nice to Meet You!"
let newReverse=sentence.split(' ').map((word)=>
  {
    return word.split('').reverse().join('')
  })
console.log(newReverse.join(' '))



// (Reversing the string)
// reverse_word=''
// for(let i=0;i<sentence.length;i++)
//   {
//       reverse_word=sentence[i]+reverse_word
//   }

// console.log(reverse_word)


