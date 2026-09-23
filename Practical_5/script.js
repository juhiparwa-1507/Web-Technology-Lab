let display = document.getElementById("display");

let firstNumber = "";
let operator = "";

function addNumber(number) {
    display.value += number;
}

function setOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function calculate() {
    let secondNumber = display.value;
    let result;

    if (operator == "+") {
        result = Number(firstNumber) + Number(secondNumber);
    }
    else if (operator == "-") {
        result = Number(firstNumber) - Number(secondNumber);
    }
    else if (operator == "*") {
        result = Number(firstNumber) * Number(secondNumber);
    }
    else if (operator == "/") {
        result = Number(firstNumber) / Number(secondNumber);
    }

    display.value = result;
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    operator = "";
}

document.getElementById("seven").addEventListener("click", function() {
    addNumber(7);
});

document.getElementById("eight").addEventListener("click", function() {
    addNumber(8);
});

document.getElementById("nine").addEventListener("click", function() {
    addNumber(9);
});

document.getElementById("four").addEventListener("click", function() {
    addNumber(4);
});

document.getElementById("five").addEventListener("click", function() {
    addNumber(5);
});

document.getElementById("six").addEventListener("click", function() {
    addNumber(6);
});

document.getElementById("one").addEventListener("click", function() {
    addNumber(1);
});

document.getElementById("two").addEventListener("click", function() {
    addNumber(2);
});

document.getElementById("three").addEventListener("click", function() {
    addNumber(3);
});

document.getElementById("zero").addEventListener("click", function() {
    addNumber(0);
});

document.getElementById("add").addEventListener("click", function() {
    setOperator("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    setOperator("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    setOperator("*");
});

document.getElementById("divide").addEventListener("click", function() {
    setOperator("/");
});

document.getElementById("equals").addEventListener("click", function() {
    calculate();
});

document.getElementById("clear").addEventListener("click", function() {
    clearDisplay();
});

document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        addNumber(event.key);
    }

    if (event.key == "Enter") {
        calculate();
    }

    if (event.key == "Escape") {
        clearDisplay();
    }
});