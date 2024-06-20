// Challenge#1
// const numberVariable=0
let numberVariable=0
numberVariable++
numberVariable++
numberVariable++
// It wont work because you cannot change const value once its declared. You get typeerror Assignment to constant variable You can change to Let to work
console.log(numberVariable)

// Challenge#2
// SNIPPET 1
// const firstNumber=20
// const secondNumber='20'

// const result=firstNumber===secondNumber
// console.log(result)

// SNIPPET 2
const firstNumber=20
const secondNumber=20 //instead of string changed value to number then it will result in true since it compares both value and datatype

const result=firstNumber===secondNumber
console.log(result)
   
// Challenge#3
const expression1=100%50;
console.log(expression1)
const expression2=100/50;
console.log(expression2)
const expression3=expression1<expression2; //0<2 =true
console.log(expression3)
const expression4=expression3 && 300+5===305 //
const expression5=!expression4;
console.log(expression5)
// Convert the above to single line

const expression=!(((100%50)<(100/50)) && (300+5)===(305))
console.log(expression)

// Challenge#4
const myObj={
  prop1:'first value',
  prop2:20
}

const myArray=[40,50,2]

const result1=myObj.prop2===(myArray[0]/myArray[2])//myObj.prop2 refers to myObj object with prop2 value is equal to 20 so myObj.prop2=20 and right side myArray[0]index refers to 40 and myArray[2] refers to array index2 so 40/2 refers to 20 so it will be true
console.log(result1)

// Challenge5

const myObj1={
  nestedObject1:{
    price:100,
    quantity:5
  },
  nestedObject2:{
    price:150,
    quantity:2
  }
}
const myArray1=[myObj1.nestedObject1,myObj1.nestedObject2]

const result2=(myArray1[0].price*myArray1[0].quantity)>
              (myArray1[1].price*myArray1[1].quantity)

console.log(result2)  //true












