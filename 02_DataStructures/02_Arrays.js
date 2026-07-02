const Marvel = ["thor","hulk","ironman"]
const DC = ["batman","flash","aquaman"]
// Marvel.push(DC)
// console.log(Marvel);


// const all = Marvel.concat(DC);
// console.log(all);

const all = [...Marvel,...DC];
console.log(all);


const big_array = [1,2,3,[4,5,6],7,8,[3,4,[5,6,7,[8,9]]]];
const flat_big_array = big_array.flat(Infinity)
console.log(flat_big_array);


console.log(Array.isArray("Sumit"))
console.log(Array.from("Sumit"));
console.log(Array.from({name : "Sumit"}));


let x = 100
let y = 200
let z = 300

console.log(Array.of(x,y,z))