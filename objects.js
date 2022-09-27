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





//1.
// let darthVader = new Object();
// darthVader["allegiance"] = "empire";
// darthVader["weapon"] = "lightsaber";
// darthVader["sith"] = true;
let darthVader = {
    "allegiance" : "empire",
    "weapon" : "lightsaber",
    "sith" : true,
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