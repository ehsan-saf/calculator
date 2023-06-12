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
        case "/": result = divide(a, b); break;
    }
} 