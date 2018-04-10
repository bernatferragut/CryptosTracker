
// CRYPTO CLASS
class Crypto {
    constructor(inputSymbol, inputAmount){
        this.symbol = inputSymbol;
        this.amount = inputAmount;
    }
}

// ADD CRYPTOS
let inputSymbol ="";
let inputAmount = "";
let cryptosList = [];

function addCrypto() {
    // input data taken ( a string and a number )
    let inputSymbol = String(document.getElementById('symbolCrypto').value).toUpperCase();
    let inputAmount = Number(document.getElementById('amountCrypto').value);
    // crypto creation
    let cryptoAdded = new Crypto(inputSymbol, inputAmount);
    // Added to the cryptolist
    cryptosList.push(cryptoAdded);
    // consoles
    console.log(`Crypto added: ${cryptoAdded.symbol}`);
    console.log(`Amount added: ${cryptoAdded.amount}`);
    console.log(cryptoAdded);
    console.log(cryptosList);
    console.log(cryptosList[0]);
    // clean inputs
    inputSymbol.value = '';
    inputAmount.value = '';
}

// GET API DATA
function getCryptos() {
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptosList[0].symbol}&tsyms=USD`;
    let theResponse;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            // Visualize Data
            let blobData = JSON.stringify(theResponse, null, 2);
            data.innerHTML = blobData;
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error
}