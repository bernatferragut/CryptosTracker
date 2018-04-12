
// CRYPTO CLASS
class Crypto {
    constructor(inputSymbol, inputAmount){
        this.symbol = inputSymbol;
        this.amount = inputAmount;
    }
}

// DIV CREATION CLASS CREATION
function createDivCrypto (cryptoAdded, theResponse) {
    let cryptoName = '';
    let cryptoSymbol = cryptoAdded.symbol;
    let cryptoHodl = cryptoAdded.amount;
    let cryptoValue = theResponse;
    let valueBTC = '?';// find out bu default
    let cryptolGainUSD = cryptoValue * cryptoHodl;
    let cryptoGainBTC = (cryptoValue * cryptoHodl) / valueBTC;
    // create new div element
    let div_Name = document.createElement('div');
    let div_Symbol = document.createElement('div');
    let div_Value = document.createElement('div');
    let div_Hodl = document.createElement('div');
    let div_GainUSD = document.createElement('div');
    let div_GainBTC = document.createElement('div');
    
    // add a class
    div_Name.setAttribute('class', 'grid-design fadeIn');
    div_Symbol.setAttribute('class', 'grid-design fadeIn');
    div_Value.setAttribute('class', 'grid-design fadeIn');
    div_Hodl.setAttribute('class', 'grid-design fadeIn');
    div_GainUSD.setAttribute('class', 'grid-design fadeIn');
    div_GainBTC.setAttribute('class', 'grid-design fadeIn');

    // text block content
    let cryptoNameContent = document.createTextNode('Crypto Name'); // find out how
    let cryptoSymbolContent = document.createTextNode(cryptoSymbol);
    let cryptoHodlContent = document.createTextNode(cryptoHodl);
    let cryptoValueContent = document.createTextNode(cryptoValue);
    let cryptoGainUSDContent = document.createTextNode(cryptoGainUSD);
    let cryptoGainBTCContent = document.createTextNode(cryptoGainBTC);

    // add text to the div
    div_Name.appendChild(cryptoNameContent);
    div_Symbol.appendChild(cryptoSymbolContent);
    div_Value.appendChild(cryptoHodlContent);
    div_Hodl.appendChild(cryptoValueContent);
    div_GainUSD.appendChild(cryptoGainUSDContent);
    div_GainBTC.appendChild(cryptoGainBTCContent);

    // add the new Element to the DOM
    let currentDiv = document.getElementById('blocks');
    currentDiv.appendChild(block);
    currentDiv.appendChild(dot);

    // send a message
    console.log('new block');
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
let theResponse;
function getCryptos() {
    // by default we get the BTC value always + any other crypto
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,${cryptosList[0].symbol}&tsyms=USD`;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            // Visualize Data
            let blobData = JSON.stringify(theResponse, null, 2);
            data.innerHTML = blobData;
            // return data
            return theResponse;
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error
        
}