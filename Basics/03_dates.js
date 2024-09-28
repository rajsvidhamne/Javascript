//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreadtedDate = new Date(2024, 0 , 28)
//let myCreadtedDate = new Date(2024, 0 , 28,5,3)
//let myCreadtedDate = new Date("09-29-2024")
//console.log(myCreadtedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreadtedDate.getTime());
// console.log(Date.now()/1000);

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})