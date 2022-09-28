'use strict';

// DESTRUCTURING EXERCISES
let user = {
    name: "John",
    years: 30
};

// let name = user.name;
// let age = user.years;
// let isAdmin = user.isAdmin;

// console.log(name, age, isAdmin);

let { name, years:age, isAdmin="False" } = user;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


// FUNCTIONS
//1.
function subtract(x, y){
    return (x-y);
}
console.log(subtract(10,5));
console.log(subtract(100,67));
console.log(subtract(10,50));
console.log(subtract("hello","o"));

//2. Create a function expression called welcome that take in name,
// age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender 
// Male"

const welcome = function(name,age,gender) {
    console.log(`My name is ${name}, I am ${age} years old 
    and of the gender ${gender}`);
}

welcome("Jimmy",45,"male");

//3. 
//Create an arrow function called powerUp that takes in two values 
//n1 and n2. The arrow function will return the power of the two 
//numbers.

const powerUp = (n1, n2) => {
    return Math.pow(n1, n2);
}
console.log(powerUp(2,3));

let powerUp2 = (n3,n4) => Math.pow(n3,n4);
console.log(powerUp2(4,2));


// HAVING FUN ---------------------------
console.log("");

const funFunct = (n) => {
    if (n > 0){
        console.log(n);
        n-=1;
        funFunct(n);
    } else {
        console.log(n);
    }
}

funFunct(5);

// object creating function
const charCreation = (name) =>{
    let x = Math.floor(Math.random() * 10);
    let charClass;
    if (x<4){
        charClass = "Paladin";
    } else if (x<7){
        charClass = "Warrior";
    } else {
        charClass = "Priest";
    }
    let hp = Math.floor(Math.random() * 100);
    let charObj = {
        characterName: name,
        characterClass: charClass,
        health: hp 
    }
    console.log(`Your name is ${name}. You are a ${charClass} 
    and you have ${hp}HP.`);
    return charObj;
}

charCreation("Felix");
charCreation("Hector");
let player3 = charCreation("Jin")

console.log(player3);
player3.health += 10;
console.log(player3);
document.write(`${player3.characterName} the ${player3.characterClass} has ${player3.health}HP.<br>`);
const combat = (character) => {
    while (character.health > 0){
        let damage = Math.floor(Math.random() * 10);
        console.log(`You take ${damage}pts of damage`);
        document.write(`\nYou take ${damage}pts of damage`);
        character.health -= damage
        console.log(`${character.characterName} has ${character.health}HP left`);
        document.write(`${character.characterName} has ${character.health}HP left`);
        document.write("<br>");
    }
    console.log(`${character.characterName} has died!`);
    document.write(`${character.characterName} has died!`);
}

combat(player3);

//document.write(player3);



// Callbacks - pass in a function as argument/parameter

const greet = (firstName, lastName) => {
    console.log(`${firstName} + ${lastName}`);
    alert(`Hello ${firstName} + ${lastName}` );
}

const bye = (firstName, lastName) => {
    console.log(`${firstName} + ${lastName}`);
    alert(`Bye ${firstName} + ${lastName}` );
}

const fullname = (f, s) => console.log(f+s);
//greet("BoB", "Smith");

const userInput = (callback) => {
    let fname = prompt("Enter your first name: ");
    let sname = prompt("Enter your surname: ");
    callback(fname, sname);
}

//userInput(greet);
// userInput(bye);
// userInput(fullname);

// PROMISES
// operate that hasn't been completed, they have 3 states:
// - fulfilled
// - rejected
// - pending

let prom = new Promise((resolve, reject)=>{
    let x = 3 + 5;
    if (x==8){
        resolve("Success");
    } else {
        reject("Failed");
    }
})

//try-catch-finally
prom.then((response) => {
    console.log(`Then block - status is: ${response}`);
}).catch((response) => {
    console.log(`Catch block - status is: ${response}`);
    console.error(response);
}).then(() => {
    console.log(`Finally block - runs regardless`);
})    