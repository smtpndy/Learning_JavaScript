/*
Primitive :-
7 types : String, Number , Boolean, null, undefined, Symbol,BigInt

Reference (non-Primitve) :-
Array ,Objects, Functions
*/

const score = 100
const scoreVal = 100.34

const isLoggedin = true
const OutsideTemp = null

let userEnail;

const id = Symbol('123')
const id2 = Symbol('123')

const bigNo = 6486246382977223455n

const Hero = ["shakitiman" , "Ironman" , "hulk"]  // array
let stud1 = {
    name: "Sumit",
    age: 19,
    Branch: "CSE"
};   //object
const myFun = function(){
    console.log("Hello");
};   // function

// *********************** MEMORY **********************

/*
Stack - Primitive 
Heap - Non primitive
*/
let ytName = "Sumit Vlogs"
let anotherName = ytName
anotherName = "Sumit Creates"

console.log(ytName) // Sumit Vlogs
console.log(anotherName)  // Sumit Creates

// now heap example

let userOne = {
 email : "userone@gmail.com",
 upi : "userone@axis"
}

let userTwo = userOne // Same Refernece for Userone
