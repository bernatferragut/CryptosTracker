
// CRYPTO CLASS
class Crypto {
    constructor(inputSymbol, inputHodl, hodlPrice){
        this.symbol = inputSymbol;
        this.hodl = inputHodl;
        this.hodlPrice = hodlPrice|0;
    }
}

// VARS
let inputSymbol ="";
let inputHodl = "";
let cryptoAdded = {};
let cryptosList = [];
let clicks = 0;
let audio;

// ADD CRYPTOS
function addCrypto() {
    // input data taken ( a string and a number )
    inputSymbol = String(document.getElementById('symbolCrypto').value).toUpperCase(); // string
    inputHodl = Number(document.getElementById('hodlCrypto').value); // number
    audio = document.getElementsByTagName('audio')[0];
    // crypto object creation
    cryptoAdded = new Crypto(inputSymbol, inputHodl);
    // get cryptos
    getCryptos(cryptoAdded);
    // add clicks
    clicks++;
}

// GET API DATA
function getCryptos(cryptoAdded) {
    // vars
    let newCrypto = cryptoAdded.symbol;
    let theResponse;
    // by default we get the BTC value always + any other crypto
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,${cryptoAdded.symbol}&tsyms=USD`;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            // We insert the response value to the crypto object
            cryptoAdded.hodlPrice = theResponse[cryptoAdded.symbol].USD;
            // Added to the cryptolist
            cryptosList.push(cryptoAdded);
            // log
            console.log(cryptosList);
            // Create DIV
            createDivCrypto(cryptoAdded, theResponse, clicks);
        }) 
        .catch(err => console.log('There was an error', err)); // In case of Error
}

// CREATE DIV
function createDivCrypto(cryptoAdded, theResponse, clicks) {

    // DIV Selection
    let myContainer = document.getElementById('cryptos');

    // Variables
    let cryptoSymbol = cryptoAdded.symbol;
    let cryptoHodl = cryptoAdded.hodl;
    let cryptoHodlValue = theResponse[cryptoSymbol].USD;
    let cryptoBTCValue = theResponse.BTC.USD;
    let crytpoGainUSD = Math.round(cryptoHodl * cryptoHodlValue);
    let crytpoGainBTC = Math.round((cryptoHodl * cryptoHodlValue) / cryptoBTCValue);

    // Handling clicks and adding DIV's
    if(clicks === 1) {
        let htmlString =
        `
        <div class="box1 fadeIn">CRYPTO</div>
        <div class="box1 fadeIn">VALUE</div>
        <div class="box1 fadeIn">HODL</div>
        <div class="box1 fadeIn">USD.GAIN</div>
        <div class="box1 fadeIn">BTC.GAIN</div>
        <div class="box2 fadeIn">${cryptoSymbol}</div>
        <div class="box2 fadeIn">${cryptoHodlValue}</div>
        <div class="box2 fadeIn">${cryptoHodl}</div>
        <div class="box2 fadeIn">${crytpoGainUSD}</div>
        <div class="box2 fadeIn">${crytpoGainBTC}</div>
        `
        myContainer.insertAdjacentHTML('beforeend', htmlString);
        // Audio file
        audio.play();
        // clean inputs
        let symbol = document.getElementById('symbolCrypto');
        symbol.value = "";
        let hodl = document.getElementById('hodlCrypto');
        hodl.value = "";
        // logs
        console.log('Crypto >> Initialised');

    } else if (clicks > 1) {
        let htmlString =
        `
        <div class="box2 fadeIn">${cryptoSymbol}</div> 
        <div class="box2 fadeIn">${cryptoHodl}</div>
        <div class="box2 fadeIn">${cryptoHodlValue}</div>
        <div class="box2 fadeIn">${crytpoGainUSD}</div>
        <div class="box2 fadeIn">${crytpoGainBTC}</div>
        `
        myContainer.insertAdjacentHTML('beforeend', htmlString);
        // Audio file
        audio.play();
        // clean inputs
        let symbol = document.getElementById('symbolCrypto');
        symbol.value = "";
        let hodl = document.getElementById('hodlCrypto');
        hodl.value = "";
        // logs
        console.log('Crypto >> Added');
    }
}

// CREATE TRACKER

function createTracker() {
    console.log('Create Tracker clicked');
}


// add to the list the theResponse