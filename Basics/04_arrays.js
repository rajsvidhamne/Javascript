//array
//array - a shallow copy of an object is a copy whose properties share the same reference point
// array - a deep copy of an object is a copy whose properties do not share the same reference point

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

//array methods
//push mhnje 5 nantr add karte 

// myArr.push(6)
// console.log(myArr);

//pop last value la remove krun dete

//myArr.pop()


//insert array first
// myArr.unshift(9)
//remove insert value
// myArr.shift()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(30));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);
//slice je select kele tyat select kele la last digit sodun print krte
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

//splice je number select kele ahe te display nai krt te sodun display krte
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
