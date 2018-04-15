
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
let cryptosListUSD = [];
let cryptosListBTC = [];
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
            // Create DIV
            createDivCrypto(cryptoAdded, theResponse, cryptosListUSD, cryptosListBTC, clicks);
        }) 
        .catch(err => console.log('There was an error', err)); // In case of Error
}

// CREATE DIV
function createDivCrypto(cryptoAdded, theResponse, cryptosListUSD, cryptosListBTC, clicks) {

    // DIV Selection
    let myContainer = document.getElementById('cryptos');

    // Variables
    let cryptoSymbol = cryptoAdded.symbol;
    let cryptoHodl = cryptoAdded.hodl;
    let cryptoHodlValue = theResponse[cryptoSymbol].USD;
    let cryptoBTCValue = theResponse.BTC.USD;
    let crytpoGainUSD = (cryptoHodl * cryptoHodlValue).toFixed(1);
    let crytpoGainBTC = ((cryptoHodl * cryptoHodlValue) / cryptoBTCValue).toFixed(1);

    // We insert gains in our gains Lists
    cryptosListUSD.push(crytpoGainUSD);
    cryptosListBTC.push(crytpoGainBTC);
    console.log('A',cryptosListUSD, cryptosListBTC);

    // Handling clicks and adding DIV's
    if(clicks === 1) {
        let htmlString =
        `
        <div class="box1 fadeIn intro">CRYPTO</div>
        <div class="box1 fadeIn intro">VALUE</div>
        <div class="box1 fadeIn intro">HODL</div>
        <div class="box1 fadeIn intro">USD.GAIN</div>
        <div class="box1 fadeIn intro">BTC.GAIN</div>
        <div class="box2 fadeIn intro">${cryptoSymbol}</div>
        <div class="box2 fadeIn intro">${cryptoHodlValue}</div>
        <div class="box2 fadeIn intro">${cryptoHodl}</div>
        <div class="box2 fadeIn intro">${crytpoGainUSD}</div>
        <div class="box2 fadeIn intro">${crytpoGainBTC}</div>
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

function createTracker(cryptosListUSD, cryptosListBTC) {

    // vars
    let gainUSD=0;
    let gainBTC=0;
    let numbersUSD;
    let numbersBTC;

    //logs
    console.log('Create Tracker clicked');

    // Casting the lists to Numers
    numbersUSD = cryptosListUSD.map(Number);
    numbersBTC = cryptosListBTC.map(Number);
    console.log('B',numbersUSD, numbersBTC);
    
    // DIV Selection
    let myContainer  = document.getElementById('cryptos');

    // Gains calculations
    for(let i=0; i< numbersUSD.length; i++) {
        gainUSD += parseInt(numbersUSD[i],10);
    }
    for(let i=0; i< numbersBTC.length; i++) {
        gainBTC += parseInt(numbersBTC[i],10);
    }

    // Logs
    console.log('GAINS: ', gainUSD, gainBTC);

    // Adding HTML Gains
    let htmlString =
        `
        <div class="box3 fadeIn">TOTAL</div>
        <div class="box3 fadeIn">GAINS</div>
        <div class="box3 fadeIn">-------></div>
        <div class="box3 fadeIn">${gainUSD}</div>
        <div class="box3 fadeIn">${gainBTC}</div>

        `
        myContainer.insertAdjacentHTML('beforeend', htmlString);
        // Audio file
        audio.play();
        // Disappear Inputs with fade
        document.getElementById('inputs').style.visibility = 'hidden';
}

