document.getElementById('btn-confirm').addEventListener('click', function () {
    const name = document.getElementById('nameField').value;
    const numValue = document.getElementById('card-num-input').value;
    const months = document.getElementById('ccmonth').value;
    const year = document.getElementById('ccyear').value;
    const cvv = document.getElementById('cvv').value;
    console.log(months, year, cvv)
    document.getElementById('card-num').innerText = numValue;
    document.getElementById('card-name').innerText = name;
    document.getElementById('card-months').innerText = months;
    document.getElementById('card-year').innerText = year;
    document.getElementById('card-cvv').innerText = cvv;
})