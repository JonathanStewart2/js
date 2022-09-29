'use strict';
// Calculator functions v1
const addition = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const power = (num) => num * num;
const remainder = (num1, num2) => num1 % num2;

const discount = (num, percent) => {
    let discountPercentage = percent/100;
    return num - (num * discountPercentage);
};

const squareRootEstimate = (num) => {
    let count = 0;
    let step = 1;
    while (num > 0){
        num -= step;
        count++;
        step += 2;
    }
    return count;
};

const sine = (deg) => {
    let radians = deg * (Math.PI/180);
    let sinOfRad = Math.sin(radians);
    return Math.round(sinOfRad);
}; 

const cosine = (deg) => {
    let radians = deg * (Math.PI/180);
    let cosOfRad = Math.cos(radians);
    return Math.round(cosOfRad);
};

const tangent = (deg) => {
    let radians = deg * (Math.PI/180);
    let tanOfRad = Math.tan(radians);
    return Math.round(tanOfRad);
};


// // testing -----------------
// console.log(addition(4,13));
// console.log(subtract(4,13));
// console.log(multiply(4,13));
// console.log(divide(4,13));
// console.log(power(4));
// console.log(remainder(100,9));
// console.log(discount(100,25));
// // testing SQE function
// console.log(squareRootEstimate(16));
// console.log(squareRootEstimate(25));
// console.log(squareRootEstimate(77));
// console.log(squareRootEstimate(100));
// // testing sine
// console.log(sine(0)); // 0
// console.log(sine(90)); // 1
// console.log(sine(180)); // 0
// console.log(sine(270)); // -1
// console.log(sine(360)); // 0
// // testing cos
// console.log(`Cos of 0 = ${cosine(0)}`); //  1
// console.log(`Cos of 90 = ${cosine(90)}`); // 0
// console.log(`Cos of 180 = ${cosine(180)}`); // -1
// console.log(`Cos of 270 = ${cosine(270)}`); // 0
// console.log(`Cos of 360 = ${cosine(360)}`); // 1
// // testing tan
// console.log(`Tan of 0 = ${tangent(0)}`); //  0
// console.log(`Tan of 90 = ${tangent(90)}`); // some big number
// console.log(`Tan of 180 = ${tangent(180)}`); // 0
// console.log(`Tan of 270 = ${tangent(270)}`); // some big number
// console.log(`Tan of 360 = ${tangent(360)}`); // 0
// ------------------------------------------

const createPageTitles = () => {
    let newTitle = document.createElement("title");
    newTitle.innerText = ("Online Calculator");
    document.head.appendChild(newTitle);

    let topH1 = document.querySelector("h1");
    topH1.innerText = "Online Calculator";
    document.body.appendChild(topH1)
}

const createTopRow = () => {
    let divEle = document.querySelector("div");
    const button9 = document.createElement("button");
    button9.innerText = "9";
    divEle.append(button9);
}

const main = () => {
    createPageTitles();
    createTopRow();
}

main();
