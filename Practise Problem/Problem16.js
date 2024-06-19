// Write a javascript function to get the first element of an array.Passing a parameter 'n' will return the first 'n' element of the array

function getFirstElement(arr,n)
{
  if(n<=arr.length)
    {
      for(let i=0;i<n;i++)
        {
          console.log(arr[i])
        }
    }
}

getFirstElement([1,2,3,4,5],5)