'use strict';
//1.
//Write a function that creates a new h1 element, adds text to that 
//element and then adds the h1 to the tree of the document on load 
//of the HTML page.

// let breakPt = "<\ br>";
// document.body.append(breakPt);    - doesnt work


// BUTTONS
const colourChangeButton = document.createElement("button");
colourChangeButton.innerText = "Title Colour Changer";
document.body.append(colourChangeButton); 

const titleButton = document.createElement("button");
titleButton.innerText = "Add Title";
document.body.append(titleButton);

const para1Button = document.createElement("button");
para1Button.innerText = "Add Paragraph";
document.body.append(para1Button);



// const addChildButton = document.createElement("button");
// addChildButton.innerText = "Add Child";
// document.body.append(addChildButton);


// MANIPULATION FUNCTIONS
const createH1 = () => {
    let newH1 = document.createElement("h1");
    newH1.innerText = prompt("Write a heading");
    document.body.appendChild(newH1);
}

const addPara = () => {
    let newPara = document.createElement("p");
    newPara.id = "paraID"
    newPara.innerText = prompt("Write your paragraph");
    document.body.appendChild(newPara);
}


const colourChange = () => {
    let div1 = document.querySelector("div");
    if (div1.style.color == "black"){
        div1.style.color = "orange";
    } else if (div1.style.color == "orange"){
        div1.style.color = "green";
    } else if (div1.style.color == "green"){
        div1.style.color = "blue";
    } else {
        div1.style.color = "black";
    }
}

// const removeChild = (element) => {
//     element.removeChild();
// }

// const addChild = (element) => {
//     let newText = document.createElement("p");
//     newText.textContent = (prompt("Gimme some text"));
//     element.appendChild(newText);
// }


// DIV FINDER
let div1 = document.querySelector("div");
div1.style.color = "orange";

// CHILD CREATION
let moreText = document.createElement("p");
moreText.textContent = "This is a new paragraph";
div1.appendChild(moreText);


// BUTTON LISTENERS
titleButton.addEventListener("click", createH1);
para1Button.addEventListener("click", addPara);
colourChangeButton.addEventListener("click", colourChange);
// removeChildButton.addEventListener("click", removeChild(div1));
// addChildButton.addEventListener("click", addChild(div1));

div1.setAttribute("attr", 10);
console.log(div1.getAttribute("attr"));
div1.removeAttribute("attr");
console.log(div1.getAttribute("attr"));


const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "paraID2";
    newPara.innerText = "New paragraph";
    document.body.appendChild(newPara)
}

makePara();

const updatePara = () => {
    let existingPara = document.getElementById("paraID2");
    console.log(existingPara);
    let newText = document.getElementById("paraText").value;
    console.log(newText);
    existingPara.innerText = newText;
}

const deletePara = () => {
    let ePara = document.getElementById("paraID2");
    ePara.remove()
}

