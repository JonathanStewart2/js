'use strict';

// CONDITIONS
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