//primitive 
//7 types: number, string, boolean,null, undefined, symbol, bigInt


const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 677564758687897989



//non-primitive (reference)
//array,objects,function

const heros = ["Dog", "Horse", "Pig"];
let myObj ={
    name: "xyz",
    age:24,
}

const myFuncation = function(){
    console.log("Hello World"); 
}

console.log(typeof anotherId);