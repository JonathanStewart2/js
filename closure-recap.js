'use strict';

// ARRAYS - lists
// declare variable type = nameOfArray = [stuff,stuff2,stuff3]
let myArr = [1,2,3,4,7]
console.log(myArr);

// DESTRUCTURING - accessing elements of array or object
// SPREAD operator: ...
const[,a,...rest] = myArr
console.log(`a=${a} and the rest=${rest}`);

// FUNCTIONS
// NORMAL: has global scope!
//function functName (parameters){statement;}
function add (num1, num2) {
    return num1 + num2;
}
console.log(`Result of 4+31=${add(4,31)}`);

// EXPRESSIONS: not global scope, must be created before being called
// const functName = function(parameters) {statement;}
const sub = function(a,b){
    return a-b;
}
console.log(`Result of 4-31=${sub(4,31)}`);

// ARROW: same as function expression but more concise
//  const functName = (parameters) => {statement;}
const mul = (num1, num2) => {
    return num1*num2
};    // can also be done on 1 line if only 1 statement
console.log(`Result of 4*31=${mul(4,31)}`);


// CALLBACKS
// function is passed as argument to another function
const fileComplaint = (mot, tax) => {
    console.log(`MOT is ${mot} and it is ${tax}`);
}

const reportStolen = (mot, tax) => {
    console.log("car is stolen");
}

const userInput = (callback) => {
    let regNo = "SK15 LD5"    //promtp("Enter reg");
    //have request to get mot and tax
    let motStatus = "in date";
    let taxStatus = "not taxed";
    callback(motStatus, taxStatus);
}

// if user clicks file  complaint
userInput(fileComplaint);
// if user reporting stolen
userInput(reportStolen);


// PROMISES - success, failed or pending
// operation that will take some time to complete
// example - get data from database:
const getData = new Promise(resolve, rejected) => {
    
}




