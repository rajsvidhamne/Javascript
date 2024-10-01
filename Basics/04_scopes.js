//var c = 300
 let a = 300

if (true) {
    let a = 10
    const b = 20
    //console.log("INNER:", a);
 }

 
 //console.log(a);
 //console.log(b);
 //console.log(c);


 function one(){
    const username = "rajsvi";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);
    two(); 
}



 if (true) {
    const username = "rajsvi";
    if (username === "rajsvi") {
        const website1 = " youtube"
       // console.log(username + website1);   
    }
    //console.log(website1);  
}
//console.log(username);

 //********************intresting******************* */
 console.log (addone(5))
 function addone(num) {
    return num + 1
 } 


 addtwo(5)
 const addtwo = function(num){
    return num + 2
 }
