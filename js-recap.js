'use strict';

// print to console
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

// Variables: 3 types
// const - once assigned value, is immutable
// let - block scoped, can is mutable
// var - do not use, scope leaks
let a = "abc";
console.log("data type of ",a,"  = ",typeof a);
a = 123
console.log("data type of ",a,"  = ",typeof a);

// Data Types
// string, boolean, symbol, null, bigint, undefined, number, NaN
console.log(typeof(true));

// OPERATORS
// +,-,/,*.>,<,>=,<=,==,===, !=
// = - assigning operator
// == - compares & checks equality of values
// == - checks equality of values and data types