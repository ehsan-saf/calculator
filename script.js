function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        alert("Can't divide by 0 !");
        resetAll();
    }
    else {
        return a / b;
    }
    
}

let mustClear = false;
let operator = "";
let result = 0;
let numbers = [];

function operate(a, b, operation) {
    switch(operation) {
        case "+": result = add(a, b); break;
        case "-": result = subtract(a, b); break;
        case "*": result = multiply(a, b); break;
        case "/": result = divide(a, b); break;
    }
} 

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");
const dotButton = document.querySelector(".dot");
const operationButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");

clearButton.addEventListener("click", resetAll);
backspaceButton.addEventListener("click", deleteNumber);
window.addEventListener("keydown", keydownEvent);

numberButtons.forEach(bt => bt.addEventListener("click", (btn) => {
    if(numbers.length === 1 && mustClear) {
        screen.textContent = "";
        mustClear = false;
    }
    screen.textContent += btn.target.textContent;
}));

dotButton.onclick = writeDecimalPoint;

operationButtons.forEach(bt => bt.addEventListener("click", (btn) => {
    operation();
    operator = btn.target.id;
}));

equalButton.addEventListener("click", equalOperator);

function operation() {
    if(numbers.length === 0) {
        numbers.push(Number(screen.textContent));
        screen.textContent = "";
    }
    else 
    {    
        operate(numbers[0], Number(screen.textContent), operator);
        numbers.pop();
        screen.textContent = result;
        numbers.push(result);
        mustClear = true;
    }
}

function equalOperator() {
    if(numbers.length === 1) {
        operate(numbers[0], Number(screen.textContent), operator);
        numbers.pop();
        screen.textContent = result;
    }
}

function resetAll() {
    numbers.pop();
    operator = "";
    screen.textContent = "";
    mustClear = false;
    result = 0;
}

function deleteNumber() {
    const screenContent = screen.textContent;
    if(screenContent.length !== 0) {
        screen.textContent = screenContent.slice(0, -1);
    }
}

function keydownEvent(e) {
    console.log(e.key);
    if(!isNaN(e.key)) {
        screen.textContent += e.key;
    }
    else if(e.key === "."){
        writeDecimalPoint();
    }
    else if(e.key === "Backspace") {
        deleteNumber();
    }
    else if("+-*/".includes(e.key)) {
        console.log("OPERATION BUTTONS !");
        operation();
        operator = e.key;
    }
    else if(e.key === "Enter"){
        equalOperator();
    }
}

function writeDecimalPoint() {
    if(screen.textContent === "") {
        screen.textContent += "0.";
    }
    else if(!screen.textContent.includes(".")) {
        screen.textContent += ".";
    }
}