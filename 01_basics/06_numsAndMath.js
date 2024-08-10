

/// ************ Numbers ************ ///

const score=400;
console.log(score);

const balance= new Number(100);
console.log(balance);


console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber=233.73827;
console.log(otherNumber.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString("en-IN"));


// ********** Maths ********** // By Default JavaScript Library

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(3.1));
console.log(Math.min(1,2,3,4,3,0));

console.log(Math.random()); // gives values in b/w 0 to 1
console.log((Math.random()*10)+1); // gives value more than 0 less then 10 => 1 to 9

const min=10;
const max=99;
console.log(Math.floor(Math.random()*(max-min+1))); // gives value b/w 10 to 99









