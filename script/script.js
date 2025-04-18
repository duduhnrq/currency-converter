function convertCurrency() {
    const inputNumber = document.getElementById('amount').value;
    const resultText = document.getElementById('result');
    
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
            const exchangeRate = (data.rates.BRL / data.rates.USD).toFixed(3);
            const convertedAmount = (inputNumber * exchangeRate).toFixed(3);
            resultText.textContent = `${inputNumber} USD = ${convertedAmount} BRL`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            resultText.textContent = 'Error fetching exchange rate. Please try again later.';    
        })
}


document.getElementById('convert-btn').addEventListener('click', convertCurrency);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('amount').value = '1';
    convertCurrency();
})