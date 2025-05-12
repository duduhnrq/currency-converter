const countryFlags = {
    USD: 'US',
    EUR: 'EU',
    BRL: 'BR',
    GBP: 'GB',
    JPY: 'JP',
    AUD: 'AU',
    CAD: 'CA',
    CHF: 'CH',
    CNY: 'CN',
    ARS: 'AR',
};

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');

const fromFlag = fromCurrency.closest('.select-box').querySelector('img');
const toFlag = toCurrency.closest('.select-box').querySelector('img');

fromCurrency.addEventListener('change', function() {
    const selectedCurrency = fromCurrency.value;
    fromFlag.src = `https://flagcdn.com/w20/${countryFlags[selectedCurrency].toLowerCase()}.png`;
});

toCurrency.addEventListener('change', function() {
    const selectedCurrency = toCurrency.value;
    toFlag.src = `https://flagcdn.com/w20/${countryFlags[selectedCurrency].toLowerCase()}.png`;
});

function updateFlags() {
    const fromSelectedCurrency = fromCurrency.value;
    const toSelectedCurrency = toCurrency.value;

    fromFlag.src = `https://flagcdn.com/w20/${countryFlags[fromSelectedCurrency].toLowerCase()}.png`;
    toFlag.src = `https://flagcdn.com/w20/${countryFlags[toSelectedCurrency].toLowerCase()}.png`;
}

