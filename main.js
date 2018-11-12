const display = document.querySelector('#displayHeader');
const numBtns = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.btnClear');
const equalBtn = document.querySelector('.btnEqual');
//EVENT LISTENERS
numBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
        display.textContent = display.textContent + btn.textContent;
    });
});
clearBtn.addEventListener("click", clearAll)
equalBtn.addEventListener('click', calculateNumbers)
//TAKES THE INPUT FROM BUTTONS AND CALLS OPERATE TO CALCULATE NUMBERS
function calculateNumbers(){
    if (display.textContent.includes('*')){
            let calcInput= display.textContent.split('*');
            display.textContent = operate(calcInput[0], "*", calcInput[1]);
    }else if (display.textContent.includes('/')){
            let calcInput= display.textContent.split('/');
            display.textContent = operate(calcInput[0], "/", calcInput[1]);
    }else if (display.textContent.includes('+')){
            let calcInput= display.textContent.split('+');
            display.textContent = operate(calcInput[0], "+", calcInput[1]);
    }else if (display.textContent.includes('-')){
            let calcInput= display.textContent.split('-');
            display.textContent = operate(calcInput[0], "-", calcInput[1]);
    }
}
// BASIC MATH FUNCTIONS
function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
    if (num2 == 0) {
        alert('You cannot divide by zero');
    }else {
        return parseInt(num1) / parseInt(num2);
    }
}

//THE OPERATIONS
function operate(num1, operator, num2){
   let result = 0;
   switch (operator){
       case '+':
            result = add(num1, num2);
            break;
       case '-':
            result = subtract(num1, num2);
            break;
       case '*':
            result = multiply(num1, num2);
            break;
       case '/':
            result = divide(num1, num2);
            break;
        default:
            break;
   }
   return result;
}
//CLEARS DISPLAY
function clearAll(){
    display.textContent = display.textContent = "";
}

// CAN BE USED FOR BACKSPACE IN FUTURE 
//function backSpace(){
//    display.textContent = display.textContent.slice(1);
//}


