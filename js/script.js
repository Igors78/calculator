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
    if (displayValue.length == 16) {
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
        let result = x + y;
        result = +result.toFixed(2);
        return result;
    },
    sub (x, y) {
        let result = x - y;
        result = +result.toFixed(2);
        return result;
    },
    mul (x, y) {
        let result = x * y;
        result = +result.toFixed(2);
        return result;
    },
    div (x, y) {
        if (y == 0){
            console.log('You can not divide by zero in classic Arithmetic!');
            return 'You can not divide by zero in classic Arithmetic!';
        }
        let result = x / y;
        result = +result.toFixed(2);
        return result;
    }
}

// add key support
document.addEventListener("keydown", function(e) {
    let code = e.key;
    switch(code) {
        case '0':
            document.querySelector("#zero").click();
        break;
        case '1':
            document.querySelector("#one").click();
        break;
        case '2':
            document.querySelector("#two").click();
        break;
        case '3':
            document.querySelector("#three").click();
        break;
        case '4':
            document.querySelector("#four").click();
        break;
        case '5':
            document.querySelector("#five").click();
        break;
        case '6':
            document.querySelector("#six").click();
        break;
        case '7':
            document.querySelector("#seven").click();
        break;
        case '8':
            document.querySelector("#eigth").click();
        break;
        case '9':
            document.querySelector("#nine").click();
        break;
        case '-':
            document.querySelector("#minus").click();
        break;
        case '+':
            document.querySelector("#plus").click();
        break;
        case '*':
            document.querySelector("#mult").click();
        break;
        case '/':
            document.querySelector("#divide").click();
        break;
        case '.':
            document.querySelector("#period").click();
        break;
        case 'Enter':
            document.querySelector("#enter").click();
        break;
        case 'Backspace':
            document.querySelector("#del").click();
        break;
        case 'Delete':
            document.querySelector("#reset").click();
        break;
    }
});