const myArr = [0,1,2,3,4,true,'hitesh']

// methods

myArr.push(7)
myArr.pop()
myArr.unshift(-1)   // insert from start
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join() // convert into string

console.log(myArr)
console.log(newArr)

// Slice , Splice
console.log('A', myArr);

const myn1 = myArr.slice(1,3)
console.log( myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1,4)
console.log( myn2);
console.log('C', myArr);

