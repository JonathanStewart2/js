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