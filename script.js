function operate(num1, num2, operator) {
  switch(operator) {
    case '+': 
      return num1 + num2;
    case '-': 
      return num1 - num2;
    case 'x': 
      return num1 * num2;
    case '÷':
      return num1 / num2;
    default:
      alert('error');
  }
}

const displayText = document.querySelector('#display-text');
const numButtons = document.querySelectorAll('[data-num]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const funButton = document.querySelector('[data-fun]');

let firstNum = '';
let secondNum = '';
let currentOperator = '';
let result = '';
let newText = '';

function addToDisplay(e) { 
  newText = e.target.textContent;
  displayText.append(newText);
}

numButtons.forEach(button => button.addEventListener('click', addToDisplay));

operatorButtons.forEach(button => button.addEventListener('click', () => assignOperation(button.textContent)));

equalsButton.addEventListener('click', doOperation);

clearButton.addEventListener('click', clear);


function assignOperation(operator) {
  firstNum = displayText.textContent;
  currentOperator = operator;
  displayText.textContent = '';
}

function doOperation() {
  secondNum = displayText.textContent;
  floatFirstNum = parseFloat(firstNum);
  floatSecondNum = parseFloat(secondNum);
  result = operate(floatFirstNum, floatSecondNum, currentOperator);
  displayText.textContent = '';
  displayText.append(result);
}

function clear() {
  firstNum = '';
  secondNum = '';
  currentOperator = '';
  displayText.textContent = '';
  result = '';
}