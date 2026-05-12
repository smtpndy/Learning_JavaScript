const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.8958
console.log(otherNum.toPrecision(3));
const otherNum1 = 123.8958
console.log(otherNum1.toPrecision(3));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));

// ******************** MATHS ***********************

console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(23.45));
console.log(Math.ceil(23.1));
console.log(Math.floor(23.9));
console.log(Math.max(2,4,7,3,8));
console.log(Math.min(2,4,7,3,8));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
