/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let num1 = '';
let operator = '';
let num2 = '';
let result = '';

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

// buttons.forEach(button => {
//   button.addEventListener('click', handleButton);
// });

// calculator.addEventListener('click', handleCalculator);

/*-------------------------------- Functions --------------------------------*/

// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const clickedBtn = event.target.innerText;
//     // display.textContent += clickedBtn;
//     // console.log(display);
//   });
// });

calculator.addEventListener('click', (event) => {
  const clickedElement = event.target;
  
  if (clickedElement.classList.contains('number')) {
    if (operator === '')
      num1 += clickedElement.innerText;   
    
    else {
      num2 += clickedElement.innerText;
    }
    display.textContent += clickedElement.innerText;
  }

  else if (clickedElement.classList.contains('operator')) {
    operator = clickedElement.innerText;
    if(operator != 'C')
      display.textContent += clickedElement.innerText;
    if(operator == 'C') {
      display.textContent = '';
      num1 = '';
      operator = '';
      num2 = '';
      result = '';
    }
  }
  console.log(num1, operator, num2);   

  if (clickedElement.classList.contains('equals')) {
    result = calculate(num1, operator, num2);
    display.textContent = result;
    num1 = '';
    operator = '';
    num2 = '';
    result = '';
    console.log(num1, operator, num2, result);   
  }
  
  function calculate(num1, operator, num2) {
    switch (operator) {
      case '*':
        return parseFloat(num1) * parseFloat(num2);
      case '-':
        return parseFloat(num1) - parseFloat(num2);
      case '+':
        return parseFloat(num1) + parseFloat(num2);
      case '/':
        return parseFloat(num1) / parseFloat(num2); 
      }
    }
});