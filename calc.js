'use strict';
// Calculator functions v1
const addition = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const power = (num) => num * num;
const remainder = (num1, num2) => num1 % num2;

const percent = (num, percent) => {
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
    console.log(`deg coming into sin function is ${deg}`);
    let radians = deg * (Math.PI/180);
    let sinOfRad = Math.sin(radians);
    return sinOfRad.toFixed(3);
}; 

const cosine = (deg) => {
    let radians = deg * (Math.PI/180);
    let cosOfRad = Math.cos(radians);
    return cosOfRad;
};

const tangent = (deg) => {
    let radians = deg * (Math.PI/180);
    let tanOfRad = Math.tan(radians);
    return tanOfRad;
};

//---------- GATHER INPUTS
const inputArr = []
const funcReq = []
const historyArr = []
const numArr = []

const createNumber = () => {
    let stringRep = inputArr.join("");
    console.log(stringRep);
    let intStringRep = parseInt(stringRep);
    numArr.push(intStringRep);
    console.log(`numArr is ${numArr}`);
    inputArr.length = 0;
}

const calculate = () => {
    //go through array and pick first values and functions requested
    if (inputArr){
        createNumber();
    }
    console.log(numArr);
    let num1 = numArr.shift();
    console.log(num1);
    console.log(numArr);

    // if (inputArr.length > 0) {
    //     let num2 = inputArr.shift();    FIX THIS LATER
    // } else {
    //     num2 = 0;
    // }
    let num2 = numArr.shift();
    let request = funcReq.shift();

    // switch to choose which calculation to perform
    let calcOutput = 0
    switch (request) {
        case ("+"):
            calcOutput = addition(num1,num2);
            checkEnd(calcOutput);
            break;
        case ("-"):
            calcOutput = subtract(num1,num2);
            checkEnd(calcOutput);
            break;
        case ("*"):
            calcOutput = multiply(num1,num2);
            checkEnd(calcOutput);
            break;
        case ("/"):
            calcOutput = divide(num1,num2);
            checkEnd(calcOutput);
            break;
        case ("%"):
            calcOutput = percent(num1,num2);
            checkEnd(calcOutput);
            break;
    }

}


const inputGather = (value) => {
    // put values inputted into an array
    //let input = parseInt(value);
    inputArr.push(value);
    console.log(inputArr);
}

const inputFunct = (funct) => {
    // push requested functions into array
    funcReq.push(funct);
    console.log(funcReq);
    createNumber();
    if (funct == "sin" || funct == "cos" || funct == "tan" || funct == "sr") { 
        let num = numArr.shift();
        let calcOutput = 0;
        let request = funcReq.shift();
        switch (request){
            case ("sr"):
                calcOutput = squareRootEstimate(num);
                checkEnd(calcOutput);
                break;
            case ("sin"):
                console.log(`Num going into sin calc is ${num}`);
                calcOutput = sine(num);
                console.log(`output from sin calc is ${calcOutput}`);
                checkEnd(calcOutput);
                break;
            case ("cos"):
                calcOutput = cosine(num);
                checkEnd(calcOutput);
                break;
            case ("tan"):
                calcOutput = tangent(num);
                checkEnd(calcOutput);
                break;
        }
    }
}


// check if further calc req
const checkEnd = (calculation) => {
    console.log(calculation);
    if (numArr.length == 0){
        updateOutput(calculation);
    } else {
        console.warn("INPUT ARRAY NOT EMPTY");
        window.alert("Error, refreshed calculator");
        // empty the arrays
        inputArr.lenth = 0
        funcReq.length = 0
        numArr.lenth = 0
    }
}

// update the outcome
const updateOutput = (value) => {
    const output = document.getElementById("result");
    output.value = value;
    // add new calculation to the history
    if (historyArr.length > 10) {
        historyArr.pop()
    } 
    historyArr.push(value);
    console.log(`HistoryArr is ${historyArr}`);
    const historyDisplay = document.getElementById("history");
    let historyString = historyArr.join(" ");
    console.log(`HistoryString is ${historyString}`);
    historyDisplay.value = historyString
    

}





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
console.log(sine(45)); // 0.7
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
