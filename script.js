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
        case "×": result = multiply(a, b); break;
        case "÷": result = divide(a, b); break;
    }
} 

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");
const dotButton = document.querySelector(".dot");
const operationButtons = document.querySelectorAll(".operation");
const equaleButton = document.querySelector(".equale");
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", resetAll);

numberButtons.forEach(bt => bt.addEventListener("click", (btn) => {
    if(numbers.length === 1 && mustClear) {
        screen.textContent = "";
        mustClear = false;
    }
    screen.textContent += btn.target.textContent;
}));

dotButton.onclick = () =>  {
    if(screen.textContent === "") {
        screen.textContent += "0.";
    }
    else if(!screen.textContent.includes(".")) {
        screen.textContent += ".";
    }
};

operationButtons.forEach(bt => bt.addEventListener("click", (btn) => {
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
    operator = btn.target.textContent;
}));

equaleButton.addEventListener("click", () => {
        if(numbers.length === 1) {
            operate(numbers[0], Number(screen.textContent), operator);
            numbers.pop();
            screen.textContent = result;
        }
});

function resetAll() {
    numbers.pop();
    operator = "";
    screen.textContent = "";
    mustClear = false;
    result = 0;
}