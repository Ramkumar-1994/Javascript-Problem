// Write a javascript function to get the last element of an array.Passing a parameter 'n' will return the first 'n' element of the array

function getLastElement(arr,n)
{
  if(n<=arr.length)
    {
      for(let i=0;i<n;i++)
        {
          console.log(arr[arr.length-1-i])
        }
    }
  else
  {
    console.log(n,'is out of Range')
  }
}

getLastElement([1,2,3,4,5],3)