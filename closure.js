'use strict';

// CLOSURES - data privacy

// outer function
const fullName = (fname) => {
    let intro = "My name is ";
    // inner function
    const lname = (s) => {
        return `${intro} ${fname} ${s}`;
    }
    return lname;
}

// let first = fullName("Ash");
// console.log(first);

// let second = first("Siva");
// console.log(second);


let first = fullName("Ash")("Siva");
console.log(first);