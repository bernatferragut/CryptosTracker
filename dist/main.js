
// ON LOAD
window.onload = function(){
    if (localStorage.length === 0) {
        console.log('This is your first time here: WELCOME!');
    } else {
        console.log('You have been here before, Loading Data...from localStorage');
        // hiding inputs
        let out = document.getElementById('inputs');
        out.setAttribute('class', 'flex-container2 fadeOut1');
        // loading storage
        loadData(localStorage);
        // getting cryptos
        getCryptos2(symbolString);
    }
};

// CRYPTO CLASS
class Crypto {
    constructor(inputSymbol, inputHodl){
        this.symbol = inputSymbol;
        this.hodl = inputHodl;
    }
}

// VARS
let inputSymbol ="";
let inputHodl = "";
let symbolString="";
let cryptoAdded = {};
let cryptoAddedList = [];
let cryptosListSymbol = [];
let cryptosListHodl = [];
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
    // Add  to the List
    cryptoAddedList.push(cryptoAdded);
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

let theResponseSymbolList=[];
let theResponseValueList=[]; 
function getCryptos2(symbolString) {
    // vars 
    let theResponse;     
    // by default we get the BTC value always + any other crypto
    let cryptosUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,${symbolString}&tsyms=USD`;
    fetch(cryptosUrl)
        .then(blob => blob.json()) 
        .then((res) => {
            let theResponse = res;
            // LOGS
            console.log('THIS IS THE LOADED RESPONSE!!!', theResponse);
            // CONVERTING THE RESPONSE IN AN ARRAY OF OBJECTS
            theResponseSymbolList = Object.keys(theResponse);
            theResponseValueList = Object.keys(theResponse).map(i=>theResponse[i].USD);
            console.log('A LIST OF RESPONSE: ', theResponse);
            console.log('A LIST OF SYMBOLS: ', theResponseSymbolList);
            console.log('A LIST OF VALUE: ', theResponseValueList);
            // Create DIV
            createDivCrypto2(theResponseSymbolList,cryptosListHodl, theResponseValueList, theResponse)  
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
        console.log('Crypto >> Added');
    }

}

function createDivCrypto2(theResponseSymbolList,cryptosListHodl, theResponseValueList, theResponse) {
    console.log('...COMING SOON...');

    // DIV Selection
    let myContainer = document.getElementById('cryptos');
    let audio = document.getElementsByTagName('audio')[0];

    // TITLES RENDER
    let htmlTitlesString =
    `
    <div class="box1 fadeIn intro">CRYPTO</div>
    <div class="box1 fadeIn intro">VALUE</div>
    <div class="box1 fadeIn intro">HODL</div>
    <div class="box1 fadeIn intro">USD.GAIN</div>
    <div class="box1 fadeIn intro">BTC.GAIN</div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlTitlesString);
    
    // create a loop for each object and create a DIV 
    for (let i=0; i<theResponseValueList.length; i++) {
        // VARS
        let cryptoSymbol = theResponseSymbolList[i];
        let cryptoHodl = cryptosListHodl[i];
        let cryptoHodlValue = theResponseValueList[i];
        let cryptoBTCValue = theResponse.BTC.USD;
        let crytpoGainUSD = (cryptoHodl * cryptoHodlValue).toFixed(1);
        let crytpoGainBTC = ((cryptoHodl * cryptoHodlValue) / cryptoBTCValue).toFixed(1);

        let htmlString =
        `
        <div class="box2 fadeIn">${cryptoSymbol}</div> 
        <div class="box2 fadeIn">${cryptoHodlValue}</div>
        <div class="box2 fadeIn">${cryptoHodl}</div>
        <div class="box2 fadeIn">${crytpoGainUSD}</div>
        <div class="box2 fadeIn">${crytpoGainBTC}</div>
        `
        myContainer.insertAdjacentHTML('beforeend', htmlString);
        
        // Audio file
        audio.play();
        // logs
        console.log('All Cryptos >> Added');
    }
    // Casting the lists to Numers
    let gainUSD =0;
    numbersUSD = theResponseValueList.map(Number);

    // Gains calculations = > WIP
    
    for(let i=0; i< theResponseValueList.length; i++) {
            gainUSD += parseInt(numbersUSD[i],10);
    }
    document.getElementById('CR0').innerText = 'GAINS: ' + gainUSD.toString() + ' USD';
}

// CREATE TRACKER
function createTracker(cryptosListUSD, cryptosListBTC, theResponseValueList) {
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
    
    // DIV Selection
    let myContainer  = document.getElementById('cryptos');

    // Gains calculations
    for(let i=0; i< numbersUSD.length; i++) {
        gainUSD += parseInt(numbersUSD[i],10);
    }

    for(let i=0; i< numbersBTC.length; i++) {
        gainBTC += parseInt(numbersBTC[i],10);
    }

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

    // Disappear Inputs with fadeOut
    let out = document.getElementById('inputs');
    out.setAttribute('class', 'flex-container2 fadeOut1');

    // Adding total value on the TOP
    document.getElementById('CR0').innerText = 'GAINS: ' + gainUSD.toString() + ' USD';

    // Show list of  cryptoAdde cryptos
    console.log('List to be saved: ', cryptoAddedList);

    // Save Data LocalStorage
    saveData(cryptoAddedList);
}


// LOCAL STORAGE - SAVE DATA
function saveData(cryptoAddedList) {
    for(let i=0; i<cryptoAddedList.length; i++) {
        localStorage.setItem(cryptoAddedList[i].symbol,cryptoAddedList[i].hodl);
    };
}

// LOCAL STORAGE - LOAD DATA
function loadData(localStorage) {
    for(let i=0; i<localStorage.length; i++){
        inputSymbol = localStorage.key(i);
        inputHodl = localStorage.getItem(localStorage.key(i));
        // crypto Symbol List
        cryptosListSymbol.push(inputSymbol);
        // crypto Hodl List
        cryptosListHodl.push(inputHodl);
        // crypto object creation
        cryptoAdded = new Crypto(inputSymbol, inputHodl);
        // Add  to the List
        cryptoAddedList.push(cryptoAdded);
    }
    // CLEANING STRING OF SYMBOLS - take out BTC
    for(let i=0; i<cryptosListSymbol.length; i++){
        let position = 0;
        if( cryptosListSymbol[i] === 'BTC'){
            position++;
            cryptosListSymbol.splice(position,1);
        }
    }
    symbolString = cryptosListSymbol.toString();
    // LOGS
    console.log('Loaded DATA OBJECT: ', cryptoAddedList);
    console.log('Loaded DATA SYMBOL: ', cryptosListSymbol);
    console.log('Loaded DATA HODL: ', cryptosListHodl);
    
    console.log('SYMBOLS COMA SEPARATED STRING:', symbolString);
}




