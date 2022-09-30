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

// CLOSURE EXERCISES

//1.
//Create a simple multiplication closure function which meets the 
//following criteria:
//    Outer function takes a single parameter as argument
//    Outer function returns another function
//    Inner function takes in a single parameter as argument
//    Inner function computes multiplication on the outer function 
// pameter and inner function parameter

let closedMulti = (num1) => {
    
    return (num2) => {
        return num1 * num2;
    }
}

// let closedMultiResult = closedMulti(5);
// console.log(closedMultiResult);
// let finalMulti = closedMultiResult(10);
// console.log(finalMulti);
console.log(closedMulti(5)(10));

//2.
//Create a Person function using getters and setters 
//for the property first name.
let person = () => {
    let firstname = "Default";
    return {
        getName: function () {
            return firstname
        },
        setName: function (name) {
            firstname = name;
        }
    }
}

let voldemort = person()
console.log(voldemort);
console.log(voldemort.getName());
voldemort.setName("Tom");
console.log(voldemort.getName());


//3. Create a function that increases and decreases 
//the value of a counter through the use of functions 
//and closures.

const counter = () => {
    let count = 0;

    // const addMore = (num2) => {
    //     return num2 + count;
    // }
    // return addMore();

    return {
        getCount: function () {
            return count
        },
        addCount: function (amount) {
            count += amount
        }
    } 
}



// testing
// let testCount = counter();
// console.log(testCount.getCount());
// testCount.addCount(3);
// console.log(testCount.getCount());

// let secondTest = counter()(4);
// console.log(secondTest.getCount());


// second attempt

const counter2 = () => {
    let count = 0;

    return {
        add: function () {
            count++;
        },
        subtract: function (amount) {
            count--;
        },
        counter: function () {
            return count;
        }
    }   
}

let c2 = counter2();
c2.add();
c2.add();
console.log(c2.counter());
for (let i = 0; i<10; i++) {
    c2.add();
    console.log(c2.counter())
}
c2.subtract();
console.log(c2.counter());


// CALLBACK EXERCISES
// Create a callback function that asks for a user to enter a 
// value, then increase that value by 10 through another function.

const valueIncrease = (value) => {
    console.log(value + 10);
    alert(value+10);
}

const getValue = (callback) => {
    let choice = parseInt(prompt("Gimme a number: "));
    callback(choice);
}

//getValue(valueIncrease);


// EXPERIMENTING
const modulo10 = (value) => {
    console.log(value%10);
}

const powerIt = (value) => {
    console.log(value * value);
}

const setValue = (alterIt, num1) => {
    alterIt(num1);
}

setValue(modulo10, 99);
setValue(modulo10, 2);
setValue(modulo10, 100);

for (let i=0; i<10; i++) {
    setValue(powerIt, i);
}
