const name = "Sumit"
const phoneNo = 7880960585

console.log(`Hello my name is ${name} and my phone number is ${phoneNo}`);    // string interpolation

const gameName = new String('God-Of-war');

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('G'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-3,4);
console.log(anotherString);

const string1 = "    Sumit    "
console.log(string1);
console.log(string1.trim());

const url = "https://google.com/sumit%20pandey"
console.log(url.replace('%20','-'));

console.log(url.includes("Sumit"));
console.log(gameName.split('-'));
