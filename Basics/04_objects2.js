//singleton

//const tinderUser = new Object()
// const tinderUser = {}

//  tinderUser.id = " 123abc"
//  tinderUser.name = "Tommy"
//  tinderUser.isLoggedIn = false

//console.log(tinderUser);

// const regularUser = {
//     smail: "tommy@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "rajsvi",
//             lastname: "dhamne"
//         }
//     }
// }

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2,obj4)
//const obj3 = { ...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "rajsvi@gmail.com"
    },
    {
         id: 2,
        email: "rajsviabc@gmail.com"
    },
    {
        id: 3,
       email: "rajsvidhamne@gmail.com"
   }
 ]

//  users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "sakshi" 
 }

 //course.courseInstructor

 const {courseInstructor} = course
 console.log(courseInstructor);

//  {
//     "name": "sakshi",
//     "coursename": "Js in hindi",
//     "price": "free"
//  }