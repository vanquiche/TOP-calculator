class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperandText = '';
    this.previousOperandText = '';
    this.operation = undefined;
  }
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {

  }

  compute() {

  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const ACButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    //console.log('hello');
  })
})


















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

function operate() {

}

