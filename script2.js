'use strict';

// CONDITIONALS
// Truthy & Falsey

// Things that are FALSEY
let falseyArray = [
    0, "", null, false, NaN, null, undefined
];

// everything else is TRUTHY

//IF, ELSE, IF-ELSE Statements
// checks condition, runs code block if condition is met
let a = 0
if (a== 0) {
    console.log("yay");
} else {
    console.log("nay");
}

let b = 10;
if (b == 1) {
    console.log("equals 1!");
} else if (b == 2) {
    console.log("  equals 2");
} else {
    console.log("not 1 or 2");
}

let c = 2;
c == 3 ? console.log("c = 3") : console.log("c is not 3");

// Equality & Type
"1" == 1 ? console.log(true) : console.log(false);
"1" === 1 ? console.log(true) : console.log(false);

// AND && and OR || operators
if (1 == 1 && 2 == 2) {
    console.log("this works");
}

if (1 == 2 || 2 == 2) {
    console.log("one OR other works");
}


//1.
let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);
//2.
console.log(strictA != strictB);
console.log(strictA !== strictB);
//3.
let age = 55;

if (age >= 18 && age <= 65) {
    console.log(`${age} is between 18 and 65`);
} else if (age < 18) {
    console.log(`${age} is underage!`);
} else {
    console.log(`${age} is over 65.`)
}
//4.
let ageResponse = "Your ages is " + (age >= 18 && age <=65 ? "accepted." : "unacceptable");
console.log(ageResponse);

let ageCheck = (age >= 50 ? "over 50" : "under 50");
console.log(ageCheck);