var form = document.querySelector('.form');
var input = document.querySelector('.firstNumber');
var input1 = document.querySelector('.secondNumber');
var plus = document.querySelector('.btnPlus');
var minus = document.querySelector('.btnMinus');
var multiplication = document.querySelector('.btnMultiplication');
var division = document.querySelector('.btnDivision');
var total = document.querySelector('.total');

plus.addEventListener("click", function (e){
    e.preventDefault()
    var firtsValue = input.value.trim();
    var secondValue = input1.value.trim();
    total.textContent = +firtsValue + +secondValue

});
minus.addEventListener("click", function (e){
    e.preventDefault()
    var firtsValue = input.value.trim();
    var secondValue = input1.value.trim();

    total.textContent = +firtsValue - +secondValue

});
multiplication.addEventListener("click", function (e){
    e.preventDefault()
    var firtsValue = input.value.trim();
    var secondValue = input1.value.trim();
    total.textContent = +firtsValue * +secondValue

});
division.addEventListener("click", function (e){
    e.preventDefault()
    var firtsValue = input.value.trim();
    var secondValue = input1.value.trim();

    total.textContent = Math.round(+firtsValue / +secondValue);

});

