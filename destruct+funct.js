'use strict';

// DESTRUCTURING EXERCISES
let user = {
    name: "John",
    years: 30
};

// let name = user.name;
// let age = user.years;
// let isAdmin = user.isAdmin;

// console.log(name, age, isAdmin);

let { name, years:age, isAdmin="False" } = user;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


// FUNCTIONS
//1.
function subtract(x, y){
    return (x-y);
}
console.log(subtract(10,5));
console.log(subtract(100,67));
console.log(subtract(10,50));
console.log(subtract("hello","o"));

//2. Create a function expression called welcome that take in name,
// age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender 
// Male"

const welcome = function(name,age,gender) {
    console.log(`My name is ${name}, I am ${age} years old 
    and of the gender ${gender}`);
}

welcome("Jimmy",45,"male");

//3. 
//Create an arrow function called powerUp that takes in two values 
//n1 and n2. The arrow function will return the power of the two 
//numbers.

const powerUp = (n1, n2) => {
    return Math.pow(n1, n2);
}
console.log(powerUp(2,3));

let powerUp2 = (n3,n4) => Math.pow(n3,n4);
console.log(powerUp2(4,2));