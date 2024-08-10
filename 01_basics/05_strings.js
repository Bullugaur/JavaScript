let name="bulbul"
let age=19

console.log(name+age+" girl"); // this is not the professional type of code 

// you can use backTik ( `` ) for clean code like this
console.log(`My name is ${name}. i am ${age} year old`);



let NewName=new String("siya-siddhi-gaur"); // String declration

console.log(NewName[3]);
console.log(NewName.__proto__);


console.log(NewName.toLocaleUpperCase());
console.log(NewName.charAt(2));
console.log(NewName.indexOf("i"));
console.log(NewName.substring(0,2));


const anotherName=NewName.substring(0,2);
console.log(anotherName);


const anotherName2=NewName.slice(1,3);
console.log(anotherName2);
console.log(NewName.valueOf());


const NewName2="   Bulbul   ";
console.log(NewName2);
console.log(NewName2.trim());


const url="https://google.com"
console.log(url.replace("google","bulbul"));
console.log(url);

console.log(url.includes("bulbul"));


let unique=NewName.split('-');
console.log(unique[2]);// expected output gaur


// ******* another try using function ******* ///
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }

  console.log(areEqualCaseInsensitive("siya","siyaa")); // false / true
  
  

 

