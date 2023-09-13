"use strict";
var container = document.getElementById("app");
var operand1 = 0;
var operand2 = null;
var operator = null;
updateDisplay();
function updateDisplay() {
    container.innerHTML = operand1.toString() + ' ' + (operator == null ? '' : operator.symbol) + ' ' + (operand2 == null ? '' : operand2);
}
function onNbrClick(value) {
    if (operator == undefined) {
        operand1 = (operand1 * 10) + value;
    }
    else {
        operand2 = ((operand2 ? operand2 : 0) * 10) + value;
    }
    updateDisplay();
}
function onOperatorClick(op) {
    if (!operator) {
        operator = op;
        updateDisplay();
    }
}
function onClearClick() {
    operand1 = 0;
    operand2 = null;
    operator = null;
    updateDisplay();
}
function onEqualClick() {
    if (operand2 != null && operator != null) {
        operand1 = operator.operate(operand1, operand2);
        operand2 = null;
        operator = null;
        updateDisplay();
    }
}
var multiply = /** @class */ (function () {
    function multiply() {
        this.symbol = 'x';
    }
    multiply.prototype.operate = function (operand1, operand2) {
        return operand1 * operand2;
    };
    return multiply;
}());
var divide = /** @class */ (function () {
    function divide() {
        this.symbol = '/';
    }
    divide.prototype.operate = function (operand1, operand2) {
        return operand1 / operand2;
    };
    return divide;
}());
var add = /** @class */ (function () {
    function add() {
        this.symbol = '+';
    }
    add.prototype.operate = function (operand1, operand2) {
        return operand1 + operand2;
    };
    return add;
}());
var subtract = /** @class */ (function () {
    function subtract() {
        this.symbol = '-';
    }
    subtract.prototype.operate = function (operand1, operand2) {
        return operand1 - operand2;
    };
    return subtract;
}());
//# sourceMappingURL=app.js.map