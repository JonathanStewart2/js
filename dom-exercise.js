'use strict';
//1.
//Write a function that creates a new h1 element, adds text to that 
//element and then adds the h1 to the tree of the document on load 
//of the HTML page.
const titleButton = document.createElement("button");
titleButton.innerText = "Add Title";
document.body.append(titleButton);

const para1Button = document.createElement("button");
para1Button.innerText = "Add Paragraph";
document.body.append(para1Button);

const createH1 = () => {
    let newH1 = document.createElement("h1");
    newH1.innerText = prompt("Write a heading");
    document.body.appendChild(newH1);
}

const addPara = () => {
    let newPara = document.createElement("p");
    newPara.innerText = prompt("Write your paragraph");
    document.body.appendChild(newPara);
}


titleButton.addEventListener("click", createH1);
para1Button.addEventListener("click", addPara);

