'use strict';

// CONSOLE LOGGING
console.log("Hello world!");
const text = "here's a message";
console.log(text);
console.info(text);
console.dir(text);
console.warn(text);
console.error(text);
console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

let firstName = "Jonathan";
let lastName = "Stewart";
let myLocation = "Glasgow";
let starSign = "Pisces";

console.log("My name is " + firstName + " " + lastName + ". I am from " + myLocation + " and I am a " + starSign);

let carName = "Nissan";
let carMake = "GT-R";

console.log("My favourite car make is", carName, " and the model is ", carMake);

let colouredOutput = "This is a colourful output";

console.log("%c" + colouredOutput, "color: orange; font-family: fantasy; background-color: black; font-style: bold; padding: 10px;");



// DATA TYPES 
let isMutable = 10;
const isImmutable = 12;
var isInsecure = "don't use me";

// 2 TYPES of types
// primatives and objects

let aBoolean = true 
let aNumber = 4
let aString = "some text"
let aBigInt = 9999999999999999n;
let aSymbol = Symbol("description in here");
let aNull = null;
let anUndefined;
// objects
let myObject = {
    key : "value",
    anotherKey : "this is another value"
};

console.log(myObject);
console.log(myObject.anotherKey)

// STRING CONCACTENATION
let aString1 = "13 * 12 = ";
let aResult = 13*12;
console.log(aString1 + aResult);

// STRING INTERPOLATION
// using literals containing placeholders
// called template literals
let aString2 = `13 * 12 = ${13*12}`;
console.log(aString2);


let a;
let b = "12345";
let c = 54321;
let d = true;
let e = {code: "Javascript"}
console.log(a + " " + typeof(a));
console.log(b + " " + typeof(b));
console.log(c + " " + typeof(c));
console.log(d + " " + typeof(d));
console.log(e + " " + typeof(e));

let totalMoney = 4000
let moneyPaidSoFar = 2348
let moneyLeft = totalMoney-moneyPaidSoFar
console.log(`The total bill is £${totalMoney}, the amount remaining is £${moneyLeft}`)


// ARRAYS
let mySword = {
    "type": "greatsword",
    "damage": 50,
};

let myShield = {
    "type": "greatshield",
    "defense": 120
};

let myInventory = [mySword, myShield, "health potion"];
console.log(myInventory);



// ITERATION

// FOR
for (let i = 0; i < 10; i++){
    console.log(`i = ${i}`)
}

// WHILE: checks condition first
let increment = 0;
let condition = true;

while (condition) {
    console.log(`increment = ${increment}`);
    increment++;

    if (increment > 20) {
        condition = false;
        console.log(`${increment} is enough!`);
    }
}

// DO WHILE: executes onces first before checking condition
let x = 0;
let canIRun = false;
do {
    x++;
    console.log(x);
} while (canIRun);

// SWITCH CASES
// run until a break or return
// can be more effective than large if-else-if statements
let someAmount = 4;
switch (someAmount) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.warn("nope!")
}

// ITERATION EXERCISES
//1.
let A = 100
let keepGoing = true

while (keepGoing) {
    console.log(A);
    A++;

    if (A > 201) {
        keepGoing = false; 
        console.log("end");
    }
}

//2.
let B = 100
while (B <= 200) {
    if (B % 2 == 0) {
        console.log(`${B} -`);
    } else {
            console.log(`${B} *`);
        }
    B++;
}

//3. print 1-10 10 times
let continuePrinting = true
let count = 1
while (continuePrinting) {
    console.log(`Current print number: ${count}`);
    
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
    count++;
    if (count == 11) {
        continuePrinting = false
    }
}

//4 Use FOR instead of WHILE
//4.1
for (let A = 100; A < 201; A++) {
    console.log(`FOR LOOP ${A}`);
}

//4.2
for (B=100; B < 201; B++) {
    if (B % 2 == 0) {
        console.log(`FOR ${B} -`);
    } else {
            console.log(`FOR ${B} *`);
        }
}

//4.3
for (let count = 1; count<11; count++) {
    console.log(`FOR LOOP ONLY - This is print number ${count}`);
    
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}


//5. Switch case day scenario
let day = "Saturday"
switch (day) {
    case "Monday":
        console.log("It is only Monday!");
    case "Tuesday":
        console.log("It's a Tuesday, 3 more to go!");
    case "Wednesday":
        console.log("Middle of the week");
    case "Thursday":
        console.log("Nearly the weekend");
    case "Friday":
        console.log("TFIF!");
    case "Saturday":
        console.log("Weekend woohoo!");
    case "Sunday":
        console.log("Uh oh, work tomorrow :( ");
        break;
    default:
        console.warn("Not a valid day");
}

let currentDate = new Date();
console.log(currentDate);
let today = currentDate.getDay();
console.log(today);