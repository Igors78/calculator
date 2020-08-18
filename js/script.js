const display = document.querySelector('#display');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');
const period = document.querySelector('#period');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
let displayValue = '';
let x = '';
let y = '';
let op = '';
let count = 0;
//console.log(numbers);
//console.log(operators);

numbers.forEach(number => number.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', addOperator));
del.addEventListener('click', removeFromDisplay);
enter.addEventListener('click', calculate);
reset.addEventListener('click', clearDisplay);
period.addEventListener('click', addPeriod);

function updateDisplay(e) {
    if (count > 0){
        displayValue = e.target.textContent;
        count = 0;
        display.textContent = displayValue;
    }else
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
function removeFromDisplay(_e){
    if (display.textContent == '0'){
        return;
    }else if (display.textContent.length == 1){
        displayValue = '';
        display.textContent = '0';
    }else{
        displayValue = display.textContent.slice(0, -1);
        display.textContent = displayValue;
    }
}
function clearDisplay(_e) {
    displayValue = '';
    display.textContent = '0';
    x = '';
    y = '';
    op = '';
}

function addOperator(e) {
    console.log(op);
    if (op != ''){
        calculate(e);
    }
    op = e.target.textContent;
    x = Number(displayValue);
    displayValue = '';

    console.log(x);

}
function calculate(e) {
    if (e.target.textContent == '='){count++};
    y = Number(displayValue);
    console.log(y);
    if (x != '' && y != '') {
    
    if (op == '+'){
        displayValue = calc.sum(x, y);
        display.textContent = displayValue;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '-'){
        displayValue = calc.sub(x, y);
        display.textContent = displayValue;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '*'){
        displayValue = calc.mul(x, y);
        display.textContent = displayValue;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '÷'){
        displayValue = calc.div(x, y);
        display.textContent = displayValue;
        x = '';
        y = '';
        op = '';
        
    }
}
}






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
        if (y == 0){
            console.log('You can not divide by zero in classic Arithmetic!');
            return 0;
        }
                return x / y;
    }
}
