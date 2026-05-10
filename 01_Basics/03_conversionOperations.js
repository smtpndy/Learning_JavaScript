let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)

console.log(valueInNumber)
console.log(typeof(valueInNumber))

/*
"33" -> 33
"33abc" -> NaN
true -> 1 ; false -> 0
*/

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);


// ********** Operations *************

let val = 3
let negVal = -val
console.log(negVal);

/*
console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2/3)
console.log(2%3)
console.log(2**3)
*/

let str1 ="hello"
let str2 =" Sumit"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);    // 12
console.log(1+"2");    // 12
console.log("1"+2+2);  //122
console.log(1+2+"2");  //32
 

console.log(+true); //1
console.log(+""); //0

let num1,num2,num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter); // 101
console.log(gameCounter); //102









