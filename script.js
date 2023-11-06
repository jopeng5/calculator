
// operations
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let num1 = 0;
let num2 = 0;
let operator = '';

function operate(num1, num2, operator) {
  switch(operator) {
    case 'add': 
      add(num1, num2);
      break;
    case 'subtract': 
      subtract(num1, num2);
      break;
    case 'multiply': 
      multiply(num1, num2);
      break;
    case 'divide':
      divide(num1, num2);
      break;
    default:
      alert('error');
  }
}
