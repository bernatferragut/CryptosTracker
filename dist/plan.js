
// 0. Create an combo input or simply an imput with validation + Input number + Add button
let inputCrypto = document.getElementById('inputCrypto');

// ADD CRYPTOS
let nameOfCrypto='';

function addCrypto() {
    let inputValue = inputCrypto.value;
    nameOfCrypto = String(inputValue).toUpperCase();
    console.log(nameOfCrypto);
    return nameOfCrypto;
}

// HODLS OBJECT
let hodl = {
    BTC : {symbol: "BTC", amount: 1000}
}

// GET API DATA
function getCryptos() {
    let cryptosUrl = `https://min-api.cryptocompare.com/data/price?fsym=${nameOfCrypto}&tsyms=USD`;
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



// Collect this information into one new object( { crypto: name, hodl: amount }) from crypto class and add them to a list
// Once all the Cryptos have been added we click the create Wallet Button which makes the call
// to the 'generated address' with the values selected

// 1. Create a Class that defines the Crypyo - we will have different cryptos so a class will work well
// 1.1 Parameteres can be: name, symbol, hodl, price, amount, total USD, total BTC ... etc

// 2. Create a Wallet Object which holds a Cryptos objects list and different Methods
// 2.1 Methods can be: add crypto, delete crypto, create wallet, delete wallet...etc

// 3. Am object that handles the different button actions can be created to keep the code tidy

// 4. Interface with a form made of inputs that will create the different crypto objects added to the wallet list.

// 5. Fetch the data from the crypto object from Cryptocompare website realtime data.

// 6. A first version in vanilla javascript with CSS GRID and a second with React components are the aims

