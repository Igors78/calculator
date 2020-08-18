const display = document.querySelector('#display');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');
const period = document.querySelector('#period');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
let displayValue = '';
console.log(numbers);
console.log(operators);

numbers.forEach(number => number.addEventListener('click', updateDisplay));
//operators.forEach(operator => operator.addEventListener('click', addOperator));
//del.addEventListener('click', removeFromDisplay);
//enter.addEventListener('click', calculate);
//reset.addEventListener('click', clearDisplay);
period.addEventListener('click', addPeriod);

function updateDisplay(e) {
    console.log(e.target.textContent);
    if (display.textContent.length == 16) {
        return;
    }else if (display.textContent === '0' && e.target.textContent == 0){
        return;
    }else{
        displayValue == ''? displayValue = e.target.textContent : displayValue += e.target.textContent;
        display.textContent = displayValue;
        console.log(displayValue);
}
}
function addPeriod(e) {
    if (display.textContent.indexOf('.') > 0){
        return;
    }
    displayValue == ''? displayValue = '0' + e.target.textContent : displayValue += e.target.textContent;
    display.textContent = displayValue;
    console.log(displayValue);
}

//function addOperator(e) {

//}







let calc = {
    sum (x, y) {
                return x + y;
    },
    sub (x, y) {
                return x - y;
    },
    mul (x, y) {
                return x * y;
    },
    div (x, y) {
        if (y === 0){
            alert('You can not divide by zero in classic Arithmetic!');
            return 0;
        }
                return x / y;
    }
}
