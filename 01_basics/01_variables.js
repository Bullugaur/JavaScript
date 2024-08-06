const userId=1234
let userEmail="user@gmail.com"
var userPassword="12345"
/*
Prefer  not use to var
beacuse of issues in block scope and functional scope
*/
userCity="jaipur" // possible but not good
let userState;

 //userId=2 // not allowed
 userEmail="abcd@gmail.com"
 userPassword="1212121212"
 userCity="kuk"



console.log(userId);
console.table([userId,userEmail,userPassword,userCity,userState])

