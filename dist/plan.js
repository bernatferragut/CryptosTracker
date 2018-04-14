
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
let clicks = 0;

function addCrypto() {
    // input data taken ( a string and a number )
    inputSymbol = String(document.getElementById('symbolCrypto').value).toUpperCase(); // string
    inputHodl = Number(document.getElementById('amountCrypto').value); // number
    // crypto object creation
    cryptoAdded = new Crypto(inputSymbol, inputHodl);
    // Added to the cryptolist
    cryptosList.push(cryptoAdded);
    // get cryptos
    getCryptos(cryptoAdded);
    // add clicks
    clicks++;
    console.log('CLICKS: ' + clicks);
    // clean inputs
    inputSymbol.value = "";
    inputHodl.value = "";
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
            createDivCrypto(cryptoAdded, theResponse);
            // Visualize Data
            // let blobData = JSON.stringify(theResponse, null, 2);
            // data.innerHTML = blobData;
        }) 
        .catch(err => console.log('There was an error', err)); // In case of Error
}

// Create DIV function
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

    // BTC
    let htmlString =
    `
        <div class="box2 fadeIn">${cryptoSymbol}</div> 
        <div class="box2 fadeIn">${cryptoHodl}</div>
        <div class="box2 fadeIn">${cryptoHodlValue}</div>
        <div class="box2 fadeIn">${crytpoGainUSD}</div>
        <div class="box2 fadeIn">${crytpoGainBTC}</div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);
    
    // // Clicks Condition
    // if(clicks === 0) {
    //         // BTC
    //     let htmlString =
    //     `
    //     <div class="box1 fadeIn">SYMBOL</div> 
    //     <div class="box1 fadeIn">HODL</div>
    //     <div class="box1 fadeIn">HODL VALUE</div>
    //     <div class="box1 fadeIn">USD GAIN</div>
    //     <div class="box1 fadeIn">BTC GAIN</div>

    //     <div class="box2 fadeIn">${cryptoSymbol}</div> 
    //     <div class="box2 fadeIn">${cryptoHodl}</div>
    //     <div class="box2 fadeIn">${cryptoHodlValue}</div>
    //     <div class="box2 fadeIn">${crytpoGainUSD}</div>
    //     <div class="box2 fadeIn">${crytpoGainBTC}</div>
    //     `
    //     myContainer.insertAdjacentHTML('beforeend', htmlString);

    // } else if (clicks > 0) {
    //         // BTC
    //     let htmlString =
    //     `
    //     <div class="box2 fadeIn">${cryptoSymbol}</div> 
    //     <div class="box2 fadeIn">${cryptoHodl}</div>
    //     <div class="box2 fadeIn">${cryptoHodlValue}</div>
    //     <div class="box2 fadeIn">${crytpoGainUSD}</div>
    //     <div class="box2 fadeIn">${crytpoGainBTC}</div>
    //     `
    //     myContainer.insertAdjacentHTML('beforeend', htmlString);
    // }
}