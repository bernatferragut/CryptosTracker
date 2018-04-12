
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
let cryptoAdded = {};
let cryptosList = [];

function addCrypto() {
    // input data taken ( a string and a number )
    inputSymbol = String(document.getElementById('symbolCrypto').value).toUpperCase(); // string
    inputAmount = Number(document.getElementById('amountCrypto').value); // number
    // crypto object creation
    cryptoAdded = new Crypto(inputSymbol, inputAmount);
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
    // get cryptos
    getCryptos(cryptoAdded);
}

// GET API DATA
let theResponse;
function getCryptos(cryptoAdded) {
    // by default we get the BTC value always + any other crypto
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,${cryptoAdded.symbol}&tsyms=USD`;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            console.log('THE RESPONSE:' + theResponse.BTC.USD);
            // Visualize Data
            let blobData = JSON.stringify(theResponse, null, 2);
            data.innerHTML = blobData;
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error

        // Create DIV
        createDivCrypto(cryptoAdded, theResponse);
}

// DIV CREATION CLASS CREATION
function createDivCrypto (cryptoAdded, theResponse) {

    let cryptoSymbol = cryptoAdded.symbol;
    console.log( 'CRYPTOSYMBOL: ' + cryptoSymbol);
    // let cryptoValue = theResponse.cryptoSymbol.USD;
    // let cryptoHodl = cryptoAdded.amount;
    // let valueBTC = theResponse.BTC.USD;
    // let cryptoGainUSD = cryptoValue * cryptoHodl;
    // let cryptoGainBTC = (cryptoValue * cryptoHodl) / valueBTC;

    // create new div element
    let div_Symbol = document.createElement('div');
    // let div_Value = document.createElement('div');
    // let div_Hodl = document.createElement('div');
    // let div_GainUSD = document.createElement('div');
    // let div_GainBTC = document.createElement('div');
    
    // add a class
    div_Symbol.setAttribute('class', 'grid-design fadeIn');
    // div_Value.setAttribute('class', 'grid-design fadeIn');
    // div_Hodl.setAttribute('class', 'grid-design fadeIn');
    // div_GainUSD.setAttribute('class', 'grid-design fadeIn');
    // div_GainBTC.setAttribute('class', 'grid-design fadeIn');

    // text crypto content
    let cryptoSymbolContent = document.createTextNode(cryptoSymbol);
    // let cryptoValueContent = document.createTextNode(cryptoValue);    
    // let cryptoHodlContent = document.createTextNode(cryptoHodl);
    // let cryptoGainUSDContent = document.createTextNode(cryptoGainUSD);
    // let cryptoGainBTCContent = document.createTextNode(cryptoGainBTC);

    // add text to the div
    div_Symbol.appendChild(cryptoSymbolContent);
    // div_Value.appendChild(cryptoHodlContent);
    // div_Hodl.appendChild(cryptoValueContent);
    // div_GainUSD.appendChild(cryptoGainUSDContent);
    // div_GainBTC.appendChild(cryptoGainBTCContent);

    // add the new Element to the DOM
    let newtDiv = document.getElementById('cryptos');
    newtDiv.appendChild(div_Symbol);
    // newtDiv.appendChild(div_Value);
    // newtDiv.appendChild(div_Hodl);
    // newtDiv.appendChild(div_GainUSD);
    // newtDiv.appendChild(div_GainBTC);

    // send a message
    console.log('new crypto!');
}
