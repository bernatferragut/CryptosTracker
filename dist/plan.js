
// CRYPTO CLASS
class Crypto {
    constructor(inputSymbol, inputHodl){
        this.symbol = inputSymbol;
        this.hodl = inputHodl;
    }
}

// ADD CRYPTOS
let inputSymbol ="";
let inputHodl = "";
let cryptoAdded = {};
let cryptosList = [];

function addCrypto() {
    // input data taken ( a string and a number )
    inputSymbol = String(document.getElementById('symbolCrypto').value).toUpperCase(); // string
    inputHodl = Number(document.getElementById('amountCrypto').value); // number
    // crypto object creation
    cryptoAdded = new Crypto(inputSymbol, inputHodl);
    // Added to the cryptolist
    cryptosList.push(cryptoAdded);
    // consoles
    console.log(`Crypto added: ${cryptoAdded.symbol}`);
    console.log(`Amount added: ${cryptoAdded.hodl}`);
    console.log(cryptoAdded);
    console.log(cryptosList);
    console.log(cryptosList[0]);
    console.log('=========================');
    // clean inputs
    inputSymbol.value = '';
    inputHodl.value = '';
    // get cryptos
    getCryptos(cryptoAdded);
}

// GET API DATA

function getCryptos(cryptoAdded) {
    let newCrypto = cryptoAdded.symbol;
    console.log('MY NEW CRYPTO: ' + newCrypto);
    let theResponse;
    // by default we get the BTC value always + any other crypto
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,${cryptoAdded.symbol}&tsyms=USD`;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            console.log(theResponse);
            // ONCE WE HAVE THE RESPONSE
            console.log('THE RESPONSE BTC: ' + theResponse.BTC.USD);
            console.log('THE RESPONSE NEWCRYPTO: ' + theResponse[newCrypto].USD);
            // Create DIV
            createDivCrypto(cryptoAdded, theResponse);
            // Visualize Data
            let blobData = JSON.stringify(theResponse, null, 2);
            data.innerHTML = blobData;
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error
}

// Create DIV function
function createDivCrypto(cryptoAdded, theResponse) {
    
    // DIV Selection
    let myContainer = document.getElementById('cryptos');

    // Variables
    console.log('---------------------')
    let cryptoSymbol = cryptoAdded.symbol; // OK
    console.log('SYMBOL: ' + cryptoSymbol); 
    let cryptoHodl = cryptoAdded.hodl; // OK
    console.log('HODL: ' + cryptoHodl);
    let cryptoHodlValue = theResponse[cryptoSymbol].USD; // OK 
    console.log('HODL VALUE: ' + cryptoHodlValue);
    let cryptoBTCValue = theResponse.BTC.USD; // OK
    console.log('BTC VALUE: ' + cryptoBTCValue);
    let crytpoGainUSD = Math.round(cryptoHodl * cryptoHodlValue); // OK
    console.log('GAINUSD: ' + crytpoGainUSD);
    let crytpoGainBTC = Math.round((cryptoHodl * cryptoHodlValue) / cryptoBTCValue); //
    console.log('GAINBTC: ' + crytpoGainBTC);
   
    // BTC
    let htmlString =
    `<div>${cryptoSymbol}</div> 
    <div>${cryptoHodl}</div>
    <div>${cryptoHodlValue}</div>
    <div>${cryptoBTCValue}</div>
    <div>${crytpoGainUSD}</div>
    <div>${crytpoGainBTC}</div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);
}