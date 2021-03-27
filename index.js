"use strict";

let stored = null;

const digits = [...Array(10).keys()].map((key) => key.toString());

const operations = {
    "+": (first, second) => first + second,
    "-": (first, second) => first - second,
    "*": (first, second) => first * second,
    "/": (first, second) => first / second
};

const elements = {
    get display() {
        return document.getElementById("display");
    },
    digitButtons: (() => {
        const buttons = {};
        for (let digit of digits)
            Object.defineProperty(buttons, digit, {
                enumerable: true,
                get: () => document.getElementById(`btn-${digit}`)
            });
        return buttons;
    })(),
    get separatorButton() {
        return document.getElementById("btn-separator");
    },
    get clearButton() {
        return document.getElementById("btn-clear");
    },
    operationButtons: (() => {
        const buttons = {};
        for (let opCode of Object.keys(operations))
            Object.defineProperty(buttons, opCode, {
                enumerable: true,
                get: () => document.getElementById({
                    "+": "btn-add",
                    "-": "btn-subtract",
                    "*": "btn-multiply",
                    "/": "btn-divide"
                }[opCode])
            });
        return buttons;
    })(),
    get calculateButton() {
        return document.getElementById("btn-calculate");
    }
}

function digitPressed(digit) {
    return () => { elements.display.textContent += digit; }
}

function separatorPressed() {
    const text = elements.display.textContent;
    if (text.length && text.indexOf(".") === -1) {
        elements.display.textContent += ".";
    }
}

function clearPressed() {
    elements.display.textContent = "";
    stored = null;
}

function operationPressed(opCode) {
    return () => {
        stored = {
            text: stored ? calculate() : elements.display.textContent,
            opCode
        };
        elements.display.textContent = "";
    }
}

function calculatePressed() {
    if (!stored) {
        return;
    }
    elements.display.textContent = calculate();
    stored = null;
}

function setUpEntryButtons() {
    for (let [digit, button] of Object.entries(elements.digitButtons)) {
        button.addEventListener("click", digitPressed(digit));
    }

    elements.separatorButton.addEventListener("click", separatorPressed);

    elements.clearButton.addEventListener("click", clearPressed);
}

function calculate() {
    const [first, second] = [stored.text, elements.display.textContent]
          .map((text) => parseFloat(text));
    return operations[stored.opCode](first, second);
}

function setUpOperationButtons() {
    for (let [opCode, button] of Object.entries(elements.operationButtons))
        button.addEventListener("click", operationPressed(opCode));
}

function setUpCalculateButton() {
    elements.calculateButton.addEventListener("click", calculatePressed);
}

function setUpKeyboardEvents () {
    const opElements = {
        '+': document.getElementById('btn-add'),
        '-': document.getElementById('btn-subtract'),
        '*': document.getElementById('btn-multiply'),
        '/': document.getElementById('btn-divide'),
    }

    document.addEventListener('keypress', function keyEvenPressed (event) {
        event.preventDefault();
        if (digits.includes(event.key)) {
            document.getElementById(`btn-${event.key}`).focus();
            digitPressed(event.key)();
        } else if (event.key === '.') {
            document.getElementById('btn-separator').focus();
            separatorPressed();
        } else if ((event.key === 'c') || (event.key === 'C')) {
            document.getElementById('btn-clear').focus();
            clearPressed();
        } else if (Object.keys(operations).includes(event.key)) {
            opElements[event.key].focus();
            operationPressed(event.key)();
        } else if ((event.key === '=') || (event.key === 'Enter')) {
            document.getElementById('btn-calculate').focus();
            calculatePressed();
        }
    });

    document.addEventListener('keyup', function keyEventBackspace (event) {
        event.preventDefault();
        if (event.key === 'Backspace') {
            document.getElementById('btn-clear').focus();
            clearPressed();
        }
    });
}

(() => {
    setUpEntryButtons();
    setUpOperationButtons();
    setUpCalculateButton();
    setUpKeyboardEvents();
})();
