'use strict';


// CONSOLE OUTPUT
console.log("something");
console.error("LOG ERROR HERE");
console.warn("warning"); // warning, not an error

console.group("group output"); // group together multiple console outputs
console.log("group output");
console.log("group output");
console.log("group output");
console.log("group output");
console.log("group output");
console.log("group output");
console.groupEnd();


// VARIABLES: 3 types
// const - once assigned value, is immutable
// let - block scoped, can is mutable
// var - do not use, scope leaks
let a = "abc";
console.log("data type of ",a,"  = ",typeof a);
a = 123
console.log("data type of ",a,"  = ",typeof a);


// DATA TYPES
// string, boolean, symbol, null, bigint, undefined, number, NaN
console.log(typeof(true));


// OPERATORS
// +,-,/,*.>,<,>=,<=,==,===, !=, !==, &&, ||,
// && and, || or - logical
// &, | - bitwise - better to use on Boolean datatypes
// = - assigning operator
// == - compares & checks equality of values
console.log(1 == "1"); //true
// == - checks equality of values and data types
console.log(1 === "1"); //false


// ITERATION
// loops - repeat instructions for certain amount of time
// FOR - when you know the number of iterations required
// WHILE: continue loop until condition is met
// DO WHILE: execute at least once and continue until condition is met

