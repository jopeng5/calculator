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

numButtons.forEach(button => button.addEventListener('click', (e) => {
  // do not allow more than one decimal
  if (!hasDecimal && e.target.textContent === '.') {
    hasDecimal = true;
  } else if (hasDecimal && e.target.textContent === '.') {
    return;
  }
  
  lowerNum += e.target.textContent;
  lowerDisplayText.textContent = lowerNum;
}));

operatorButtons.forEach(button => button.addEventListener('click', (e) => {
  // check if lowerNum exists before proceeding with operation
  if (lowerNum === '') return;

  // reset decimal check to allow decimals in second number
  hasDecimal = false;

  // check that both numbers and operator exist before doing operation
  if (lowerNum && upperNum && currentOperator) {
    result = operate(lowerNum, upperNum, currentOperator);
  } else { // if either of the 2 numbers or operator is missing, return the number currently on the lower display
    result = parseFloat(lowerNum);
  }
  currentOperator = e.target.textContent;
  moveLowerToUpper(currentOperator);
  
}));

// equalsButton.addEventListener('click', );

// clearButton.addEventListener('click', clear);

function moveLowerToUpper(operator) {
  upperNum = result + ' ' + operator + ' ';
  upperDisplayText.textContent = upperNum;
  lowerDisplayText.textContent = '';
  lowerNum = '';
}

function clear() {
  lowerNum = '';
  upperNum = '';
  currentOperator = '';
  lowerDisplayText.textContent = '';
  upperDisplayText.textContent = '';
  result = '';
}

function operate(num1, num2, operator) {
  let floatNum1 = parseFloat(num1);
  let floatNum2 = parseFloat(num2);
  switch(operator) {
    case '+': 
      return floatNum1 + floatNum2;
    case '-': 
      return floatNum1 - floatNum2;
    case 'x': 
      return floatNum1 * floatNum2;
    case '÷':
      return floatNum1 / floatNum2;
    default:
      alert('error');
  }
}