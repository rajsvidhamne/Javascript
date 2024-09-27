 const name ="prachi"
 const repoCount = 50

 //console.log(name + repoCount + " value");

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String ('hitesh-hc')

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.toLowerCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8,4)
 console.log(anotherString);

 const newStringOne = "         rajsvi     "
 console.log(newStringOne.trim());

 const url = "https://www.google.mail"
 console.log(url.replace('mail','com'));

 console.log(url.includes('mark'));

 console.log(gameName.split('-'));
