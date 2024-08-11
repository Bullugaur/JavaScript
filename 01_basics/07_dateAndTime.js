// Dates //

const myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString("en-IN"));
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

const myCTreatedDate=new Date(2024,4,14);
console.log(myCTreatedDate.toDateString());

// const myAnotherDate= new Date(2024,4,14,4,8);
// console.log(myAnotherDate.toLocaleString());

// const myAnotherDate= new Date("2024-01-15"); // format => yy/mm/dd
// console.log(myAnotherDate.toLocaleString());

const myAnotherDate= new Date("4-05-2024"); // format => mm/dd/yy
console.log(myAnotherDate.toDateString());


// ******** time ******** //
const myTimeStamp=  Date.now();

console.log(myTimeStamp);
console.log(myAnotherDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

let test=newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(test);










