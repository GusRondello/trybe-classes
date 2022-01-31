const CRYPTO_URL = 'https://api.coincap.io/v2/assets';
const cryptoCoin = document.getElementById('crypto-moeda');

const fetchCrypto = () => {
    const myObject = {
        method: "GET",
        headers: { 'Accept-Encoding': deflate}
    }
    fetch(CRYPTO_URL, myObject)
        .then(response => response.json())
        .then(data => cryptoCoin.innerHTML = data.id)
}


window.onload = () => fetchCrypto();