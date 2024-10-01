//immediately invoked function expressions (IIFE)
//global scope ke pollution ko hatane ke liye iska use hota hai

(function chai(){
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rajsvi')