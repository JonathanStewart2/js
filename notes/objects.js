'use strict';

let myInventory = []
myInventory.push("sword");
myInventory.push("potion");
myInventory.push("shield");
console.log(myInventory);
console.log(myInventory.sort());
console.log(myInventory.reverse());
console.log(myInventory.join());
console.log(myInventory.sort().join());

myInventory.unshift("helmet");
console.log(myInventory);
myInventory.shift("helmet");
console.log(myInventory);
console.log(myInventory.length);

for (let item of myInventory) {
    console.log(item);
}

//DESTRUCTURING AN ARRAY
const myKatanas = ["Uchigatana", "Masamune", "Muresame", "Nagakiri", "Moon's Veil"]
const [a,b,c,d,e] = myKatanas;
console.log(a);
console.log(c);
//SPREAD OPERATOR ...
const [w,x,...rest] = myKatanas;
console.log(x);
console.log(rest);
// SKIPPING ELEMENTS - use , to separate
const[g,,i,j,k] = myKatanas
console.log(g);
console.log(i);
// DESTRUCTING OBJECTS
const greatsword = {
    damage: 10,
    weight: 12,
    value: 3
}

let {damage, weight} = greatsword;
console.log(`The Greatsword does ${damage}pts damage and is ${weight}kg of weight`); 

// DEFAULT VALUES FOR ARRAYS
const rgb = [,,200];
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// NESTED DESTRUCTING
const player = {
    name: "Bob McGraw",
    class: "Paladin",
    stats: {HP:100, MP:25, STR:10}
}

const {name, stats: {HP, MP, STR, INT = 5} } = player

console.log(`${name} has ${HP}hp and ${INT} intelligence`);

// NESTED ARRAY DESTRUCTING
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
const [hex, [r, gn, bl]] = color;
console.log(hex, r, gn, bl);


//1.
// let darthVader = new Object();
// darthVader["allegiance"] = "empire";
// darthVader["weapon"] = "lightsaber";
// darthVader["sith"] = true;
let darthVader = {
    allegiance : "empire",
    weapon : "lightsaber",
    sith : true,
}

console.log(darthVader);

//2.
console.log(`Vaders allegiance is to the ${darthVader["allegiance"]}`);
console.log(`Vaders weapon is a ${darthVader["weapon"]}`);
console.log(`Vader is a sith? ${darthVader["sith"]}`);
console.log(`Is Vader a Jedi? ${darthVader["sith"] == false ? "True" : "False"}`);

//3.
let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("my name is");
myArray.push("Darth");
myArray.push("Vader");
console.log(myArray.length);
myArray.shift();

// FOR loop attempt 1
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// FOR loop attempt 2
for (let item of myArray) {
    console.log(item);
}



// EXERCISES
//1.
let user = {
    name: "John",
    years: 30
};

(`${name}`, age = $[years]`) = user