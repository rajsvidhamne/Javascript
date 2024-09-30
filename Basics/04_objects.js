//object
//singleton 
//object literals


const mySym = Symbol ("key1")
const JsUser = {
    name: "rajsvi",
    "full name": "rajsvi dhamne",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "rajsvi@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.[mySym]);

// JsUser.email = "rajsvi@google.com"
// //Object.freeze(JsUser)
// JsUser.email = "rajsvi@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());