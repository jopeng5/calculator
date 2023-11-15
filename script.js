const lowerDisplayText = document.querySelector('#lower-display-text');
const upperDisplayText = document.querySelector('#upper-display-text');
const numButtons = document.querySelectorAll('[data-num]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const funButton = document.querySelector('[data-fun]');

let lowerNum = '';
let upperNum = '';
let currentOperator = '';
let result = '';
let hasDecimal = false;

numButtons.forEach(button => button.addEventListener('click', addToLower));

operatorButtons.forEach(button => button.addEventListener('click', (e) => doOperation(e.target.textContent)));

equalsButton.addEventListener('click', doOperation);

clearButton.addEventListener('click', clear);

function addToLower(e) { 
  // do not allow more than one decimal
  if (!hasDecimal && e.target.textContent === '.') {
    hasDecimal = true;
  } else if (hasDecimal && e.target.textContent === '.') {
    return;
  }

  lowerNum += e.target.textContent;
  lowerDisplayText.textContent = lowerNum;
}

function doOperation(operator) {
  // check if firstNum exists before proceeding with operation
  if (lowerNum === '') return;

  // reset decimal check to allow decimals in second number
  hasDecimal = false;

  currentOperator = operator;

  // check that both numbers and operator exist before doing operation
  if (lowerNum !== '' && upperNum !== '' && currentOperator !== '') {
    result = Number(operate(lowerNum, upperNum, currentOperator).toFixed(8));
    lowerDisplayText.append(result);
  }

  moveLowerToUpper(currentOperator);
  
}

function clear() {
  lowerNum = '';
  upperNum = '';
  currentOperator = '';
  lowerDisplayText.textContent = '';
  upperDisplayText.textContent = '';
  result = '';
}

function moveLowerToUpper(operator) {
  upperDisplayText.textContent = lowerNum + ' ' + operator + ' ';
}

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