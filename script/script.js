function convertCurrency() {
    const inputNumber = document.getElementById('amount').value;
    const resultText = document.getElementById('result');
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    if (!inputNumber || isNaN(inputNumber)) {
        resultText.textContent = 'Please enter a value.';
        return;
    } else if (inputNumber > 1000000) {
        resultText.textContent = 'Please enter a number less than 1,000,000.';
        return;
    }
    
    fetch('https://api.exchangerate-api.com/v4/latest/USD?apikey=cf48e7061a1e747f37ac479cac4999f5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const rate = data.rates[toCurrency];
            if (!rate) {
                resultText.textContent = 'Invalid currency selected.';
                return;
            } 
            const convertedAmount = (inputNumber * rate).toFixed(2);
            resultText.textContent = `${inputNumber} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            resultText.textContent = 'Error fetching exchange rate. Please try again later.';    
        })
}

const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', convertCurrency);
convertBtn.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertCurrency();
    }
});

document.getElementById('from-currency').addEventListener('change', convertCurrency);

document.getElementById('to-currency').addEventListener('change', convertCurrency);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('amount').value = '1';
    convertCurrency();
})