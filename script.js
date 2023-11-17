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
  // do not allow more than one decimal in first number
  if (!hasDecimal && e.target.textContent === '.') {
    hasDecimal = true;
  } else if (hasDecimal && e.target.textContent === '.') {
    return;
  }

  lowerNum += e.target.textContent;
  lowerDisplayText.textContent = lowerNum;
}));

operatorButtons.forEach(button => button.addEventListener('click', (e) => {
  // check that lowerNum exists before proceeding with operation
  if (lowerNum === '') return;

  // reset decimal check to allow decimals in second number
  hasDecimal = false;

  // check that both numbers and operator exist before doing operation
  if (lowerNum && upperNum && currentOperator) {
    if (parseFloat(lowerNum) === 0 && currentOperator === '÷') {
        alert('Sorry, you can\'t divide by zero!');
    } else {
      result = Math.round(operate(result, lowerNum, currentOperator) * 1000000) / 1000000;
    }
  } else {
    result = parseFloat(lowerNum);
  }
  currentOperator = e.target.textContent;
  moveLowerToUpper(currentOperator);
}));

equalsButton.addEventListener('click', (e) => {
  // do not allow operation if operator or second number is missing
  if (!result || !lowerNum || !currentOperator) {
    alert('You\'re missing another number or operator!');
  } else if (parseFloat(lowerNum) === 0 && currentOperator === '÷') {
    alert('Sorry, you can\'t divide by zero!');
  } else {
    lowerDisplayText.textContent = Math.round(operate(result, lowerNum, currentOperator) * 1000000) / 1000000;
    upperDisplayText.textContent = '';
  }
});

clearButton.addEventListener('click', () => {
  lowerNum = '';
  upperNum = '';
  currentOperator = '';
  result = '';
  lowerDisplayText.textContent = '';
  upperDisplayText.textContent = '';
});

function moveLowerToUpper(operator) {
  upperNum = result + ' ' + operator + ' ';
  upperDisplayText.textContent = upperNum;
  lowerDisplayText.textContent = '';
  lowerNum = '';
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