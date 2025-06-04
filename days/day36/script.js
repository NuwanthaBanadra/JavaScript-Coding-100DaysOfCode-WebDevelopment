const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

const apiURL = "https://api.exchangerate-api.com/v4/latest/USD";

fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        currencies.forEach(currency => {
            fromCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
            toCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
        });

        fromCurrency.value = "USD";
        toCurrency.value = "INR";
    });

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!amount || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[to];
            const converted = (amount * rate).toFixed(2);
            result.innerText = `${amount} ${from} = ${converted} ${to}`;
        });
}
