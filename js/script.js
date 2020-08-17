const display = document.querySelector('#display');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const enter = document.querySelector('#enter');
const period = document.querySelector('#period');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
console.log(numbers);
console.log(operators);

numbers.forEach(number => number.addEventListener('click', printToDisplay));
operators.forEach(operator => operator.addEventListener('click', addOperator));
del.addEventListener('click', removeFromDisplay);
enter.addEventListener('click', calculate);
reset.addEventListener('click', clearDisplay);
period.addEventListener('click', addPeriod);







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
