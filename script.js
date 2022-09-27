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
    console.log(i)
};

let puppies = 0;
let notEnoughPuppies = true;

// WHILE: checks condition first
while (notEnoughPuppies) {
    console.log("Another puppy");
    puppies++;

    if (puppies>20) {
        notEnoughPuppies = false;
        let enough = "Enough puppies!";
        console.log(enough);
    }
};

// DO WHILE: executes onces first before checking condition
let x = 0;
let canIRun = false;
do {
    x++;
    console.log(x);
} while (canIRun);;



