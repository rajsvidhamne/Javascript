function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("s");
    console.log("v");
    console.log("I");
    
}
//sayMyName()

function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result
return number1 + number2
}
const result = addTwoNumbers(3,5)

//console.log("result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
//console.log (loginUserMessage("rajsvi"));
//console.log(loginUserMessage("rajsvi"));


function calculatorCartPrice(...num1){
    return num1
}

//console.log(calculatorCartPrice(200, 400, 600))

const user = {
    username: "rajsvi",
    price: 100000
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` );
    
}

//handleObject(user)
handleObject({
    username:"sam",
    price:200
})

const  myNewArray = [200,400,100,400]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,600,800,9000]));