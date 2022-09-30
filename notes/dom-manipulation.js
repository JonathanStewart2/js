'use strict';

// Document Object Model

//                  DOCUMENT
//                     |
//                  ROOT ELEMENT <html>
//                  /               \
//              ELEMENT               ELEMENT
//              <head>                 <body>
//                                      /    \
//                                    <h1>    <div>

const title = document.createElement("h1"); // creates h1 tag
title.innerText = "Let's manipulate the DOM"; // adds text inbetween h1 tags
document.body.appendChild(title); // h1 added to body

const div = document.getElementById("myDiv"); // finds specific element id=myDiv
console.log(div);

const newButton = document.createElement("button"); // creates a button element
newButton.innerText = "PUSH ME"; // updates text on button
div.prepend(newButton); //adds button to div we retrieved


const greet = () => {
    console.log("Hello World");
}

// either of these 2
newButton.onclick = greet;
newButton.addEventListener("click", greet);


const div2 = document.querySelector("body > div.divNoid");
console.log(div2);

// selecting a paragraph within a div
const para = document.querySelector("body > div.divNoid > p");
para.innerText = "hello";


