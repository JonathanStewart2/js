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
// const getData = new Promise(resolve, rejected) => {
//     if (data_received) {
//         resolve("successful");
//     } else {
//         reject("failed");
//     }
// }

// getData.then((data) => {
//     console.log(data);
// })
// .catch((message) => {console.error("error message");
// })


// CLOSURES
// inner and outer functions -> nested

const multiClosure = (num1) => {

    const innerMulti = (num2) => {
        console.log(num1*num2);
        return num1*num2;
    }
    return innerMulti
}

let answer = multiClosure(5);
answer(5);



//Callback Exercise again
//Create a callback function that asks for a user to enter a value, 
//then increase that value by 10 through another function

const getVal =(callback) => {
    let userVal = parseInt(prompt("Gimme a number"));
    callback(userVal);
}

const add10 = (num) => {
    let newNum = num+10;
    console.log(newNum);
    window.alert(`Haha your number is now ${newNum}`);
}

const add20 = (num) => {
    let newNum = num+20;
    console.log(newNum);
    window.alert(`Haha your number is now ${newNum}`);
}

//getVal(add10);
//getVal(add20);


// CLOSURE EXERCISES AGAIN
// 1.

const multiply = (x) => {
    const multiply2 = (y) => {
        console.log(x*y);
    }
    return multiply2;
}

let first = multiply(10);
let secondAns = first(10);


//2.
//Create a Person function using getters and setters for the 
// property first name 

const person = () => {
    let firstName = "default";
    let lastName = "default";
    return {
        setFirst: function (newFirst) {
            firstName = newFirst;
        },
        setLast: function (newLast) {
            lastName = newLast;
        },
        getFirst: function () {
            return firstName;
        },
        getLast: function () {
            return lastName
        }
    }
}

let newPlayer = person()
console.log(`First ${newPlayer.getFirst()}, Last ${newPlayer.getLast()}`);
newPlayer.setFirst("Jin");
newPlayer.setLast("Sakai");
console.log(`First ${newPlayer.getFirst()}, Last ${newPlayer.getLast()}`);

//3.
// Create a function that increases and decreases the 
// value of a counter through the use of functions and closures

const counter = () => {
    let count = 0
    return {
        add: function (num) {
            count += num;
            console.log(count);
        },
        sub: function (num) {
            count -= num;
            console.log(count);
        },
        mult: function(num){
            count = count * num;
            console.log(count);
        },
        div: function(num){
            count = count / num;
            console.log(count);
        },
        getCount: function(){
            console.log(count);
            return count;
        }
    }
}

let newCount = counter()
newCount.add(15);
newCount.div(3);
newCount.mult(4);
let finalCount = newCount.getCount();
console.log(`The final count is ${finalCount}`)