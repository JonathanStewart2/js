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

// for (initialization, condition, iterator) {statements}
for (let i = 1; i < 11; i++){
    console.log(i);
}

// while
let x = 6

while (x < 5){
    console.log(x);
    x++;
} // doesn't run as x is > 5

// do-while
do {
    console.log("do-while working");
} while (x < 5);   // runs once even though x > 5 to start with


// CONDITIONALS
// truthy/falsey - all values have inherent boolean value, defaults to truthy
// falsey examples
let g;
console.log(typeof g);
if (g){
    console.log(true);
} else {
    console.log(false);
}

// IF statements: need else if using else if, if only if then don't always need else
// if (condition) {statement} else {statement}
// if (condition) {statement} else if (condition) {statement} else {statement}

let temp = 26
if (temp < 20){
    console.log("Turn on heating");
} else if (temp < 25){
    console.log("time to get shorts on");
} else {
    console.log("put on the A/C")
}


// SWITCH CASES
let day = "thurs";
switch(day){
    case "mon":
        console.log("Day 1");
        break;
    case "tues":
        console.log("Day 2");
        break;
    case "wed":
         console.log("Day 3");
         break;
    case "thurs":
         console.log("Day 4");
         break;
    case "fri":
        console.log("Day 5");
        break;
    case "sat":
        console.log("Day 6");
        break;
    case "sun":
         console.log("Day 7");
         break;
    default:
        console.log("error");
}


// TERNARY STATEMENTS - ?
// condition ? value-if-true : value-if-false
let age = 10;
let outcome = age > 18 ? "over 18" : "Under 18";
console.log(outcome);
console.log(age > 15 ? "over 15" : "Under 15");


// OBJECTS: unordered collection of related data (key:value pairs)
let person = {
    name: "ash",
    age: 12,
    job: "child"
}
console.log("person", person);
console.log(JSON.stringify(person)); //convert object to string

// JSON - JavaScript Object Notation
let jsonObj = `[{
    name: "ash",
    age: 12,
    job: "pokemon trainer"
},
{
    name: "brock",
    age: 17,
    job: "gym leader"
}]`;
console.log("JSON", jsonObj);

// GET request
fetch("people.json")
.then(response => response.json())
.then(data => console.log("fetch", data));


// ARRAYS
const myArr = [1,"2",3,4,5]
const nameArr = ["bob", "jim", "sam"]
console.log(myArr, nameArr);
console.log(nameArr[1]);
console.log(myArr[1]);
nameArr.push("simon");
console.log(nameArr);

// DESTRUCTURING
const [a1,a2,a3,a4,a5] = myArr;
console.log(a2,a4);
console.log(a1 + a2);
console.log(a1+parseInt(a2)); //parseInt changes string to int
// spread operator ...
const[name1,name2,...rest] = nameArr;
console.log(name2);
console.log("rest:", rest);

const grades = [33,45,24,64,24,53,25,73,14,58,96,45];
const[,,,,grade,...others] = grades;
console.log("grade :",grade);
console.log("others :", others);

//object destructing
