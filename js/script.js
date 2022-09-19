const nameField = document.getElementById('nameField');
const nameValue = nameField.innerText;
console.log(nameValue)
const numField = document.getElementById('card-num');
const numValue = numField.value;
const months = document.getElementById('ccmonth');
const monthsValue = months.value;
const year = document.getElementById('ccyear');
const yearValue = year.value;
const cvv = document.getElementById('cvv');
const cvvValue = cvv.value;
document.getElementById('btn-confirm').addEventListener('click', function () {
    console.log(nameValue, numValue, monthsValue, yearValue, cvvValue);
})