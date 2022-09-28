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