'use strict';

// print 1 - 100 on a new line
// mulitple of 3 - Fizz
// multiple of 5 - Buzz
// multiple of 3 and 5 - FizzBuzz

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
    

for (let i = 1; i < 101; i++) {
    switch (true) {
        case (i % 3 == 0 && i % 5 == 0):
            console.log("FizzBuzz");
            break;
        case (i % 3 == 0):
            console.log("Fizz");
            break;
        case (i % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
            break;
    }
}


// TERNARY IFs
for (let i = 1; i < 101; i++) {
    console.log((i%3==0 ? "Fizz" : "") + (i%5==0 ? "Buzz": "") || i);
}



// STRING CONCATS
for (let i = 1; i <= 100; i++) {
    let str;

    if (i%3) {
        str = "";
    } else {
        str = "Fizz";
    }

    if (i%5) {
        str = `${str}`;
    } else {
        str = `${str}Buzz`;
    }

    if (str) {
        console.log(str);
    } else {
        console.log(i);
    }
}

// TERNARY IF WITH INTERPOLATION (more spread out)
for (let i = 1; i <= 100; i++) {

    console.log(
        `${ i%3 ? "": "Fizz"}${ i%5 ? "":"Buzz"}` || i
    )

}    

// WHILE LOOPS
let i = 1
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++

}