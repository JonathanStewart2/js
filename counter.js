'use strict';

// get input box element
const counter = document.getElementById("counter");

const plusOne = () => {
    counter.value = parseInt(counter.value) + 1;
}

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
}

const reset = () => {
    counter.value = 0;
}