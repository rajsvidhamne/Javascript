const user = {
    username: "rajsvi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function coffee(){
//     let username = "demo"
//     console.log(this.username);
// }

// coffee()

// const coffee = function(){
//     let username = "john"
//     console.log(this.username);  
// }

// const coffee = () => {
//     let username = "goa"
//     console.log(this);
    
// }
// coffee()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }


//const addTwo = (num1 , num2) => num1 + num2

const addTwo = (num1 , num2) => (num1 + num2) //implicit

console.log(addTwo(3,4));