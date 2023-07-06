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
    return a / b;
}

let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;

function operate(a, b, operation) {
    switch(operation) {
        case "+": result = add(a, b); break;
        case "-": result = subtract(a, b); break;
        case "x": result = multiply(a, b); break;
        case "÷": result = divide(a, b); break;
    }
} 

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");
const dotButton = document.querySelector(".dot");
const operationButtons = document.querySelectorAll(".operation");
const equaleButton = document.querySelector(".equale");


numberButtons.forEach(bt => bt.addEventListener("click", (btn) => {
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
    operator = btn.target.textContent;
    firstNum = Number(screen.textContent);
    screen.textContent = "";
}));

equaleButton.addEventListener("click", () => {
    secondNum = Number(screen.textContent);
    operate(firstNum, secondNum, operator);
    screen.textContent = result;
});

