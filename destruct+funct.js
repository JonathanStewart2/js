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