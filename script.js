'use strict'

console.log("Hello world!");
const text = "here's a message";
console.log(text);
console.info(text);
console.dir(text);
console.warn(text);
console.error(text);
console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

for (let i = 0; i < 10; i++){
    console.log(i)
}

let puppies = 0
let not_enough_puppies = true

while (not_enough_puppies) {
    console.log("Another puppy");
    puppies++;

    if (puppies>20) {
        not_enough_puppies = false
        let enough = "Enough puppies!"
        console.log(enough);
    }
}
