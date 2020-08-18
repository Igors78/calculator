const display = document.querySelector('#display');
const buffer = document.querySelector('#buffer');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');
const period = document.querySelector('#period');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
let displayValue = '';
let bufferValue = '';
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
    bufferValue = '';
    buffer.textContent = '0';
    displayValue = '';
    display.textContent = '0';
    x = '';
    y = '';
    op = '';
}

function addOperator(e) {
    console.log(op);
    if (op != ''){
        bufferValue += op;
        buffer.textContent = bufferValue;
        calculate(e);
    }
    op = e.target.textContent;
    x = Number(displayValue);
    bufferValue = displayValue + op;
    buffer.textContent = bufferValue;
    displayValue = '';

    console.log(x);

}
function calculate(e) {
    if (e.target.textContent == '='){count++};
    y = Number(displayValue);
    console.log(y);
    if (x != '' && y != '') {
    
    if (op == '+'){
        bufferValue += displayValue;
        buffer.textContent = bufferValue;
        displayValue = calc.sum(x, y);
        display.textContent = displayValue;
        buffer.textContent += `=${displayValue}`;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '-'){
        bufferValue += displayValue;
        buffer.textContent = bufferValue;
        displayValue = calc.sub(x, y);
        display.textContent = displayValue;
        buffer.textContent += `=${displayValue}`;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '*'){
        bufferValue += displayValue;
        buffer.textContent = bufferValue;
        displayValue = calc.mul(x, y);
        display.textContent = displayValue;
        buffer.textContent += `=${displayValue}`;
        x = '';
        y = '';
        op = '';
        
    }else if (op == '÷'){
        bufferValue += displayValue;
        buffer.textContent = bufferValue;
        displayValue = calc.div(x, y);
        display.textContent = displayValue;
        buffer.textContent += `=${displayValue}`;
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

// add key support
document.addEventListener("keydown", function(e) {
    let code = e.which;
    switch(code) {
        case 48:
            document.querySelector("#zero").click();
        break;
        case 49:
            document.querySelector("#one").click();
            document.querySelector("#one").focus();
        break;
        case 50:
            document.querySelector("#two").click();
        break;
        case 51:
            document.querySelector("#three").click();
        break;
        case 52:
            document.querySelector("#four").click();
        break;
        case 53:
            document.querySelector("#five").click();
        break;
        case 54:
            document.querySelector("#six").click();
        break;
        case 55:
            document.querySelector("#seven").click();
        break;
        case 56:
            document.querySelector("#eigth").click();
        break;
        case 57:
            document.querySelector("#nine").click();
        break;
        case 45:
            document.querySelector("#minus").click();
        break;
    }
});