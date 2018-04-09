
// 0. Create an combo input or simply an imput with validation + Input number + Add button
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



// HODLS OBJECT
let hodl = {
    BAT : {symbol: "BAT", amount: 6474},
    BTC : {symbol: "BTC", amount: 4.01},
    BTG : {symbol: "BTG", amount: 4.01},
    BTS : {symbol: "BTS", amount: 12500},
    EOS : {symbol: "EOS", amount: 5860},
    IOT : {symbol: "IOT", amount: 10200},
    LTC : {symbol: "LTC", amount: 20.01},
    TRX : {symbol: "TRX", amount: 6740},
    XLM : {symbol: "XLM", amount: 1260},
    XRB : {symbol: "XRB", amount: 100},
}

// GET API DATA
// 1. Fetch + JSON + ES6 Literals=> Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)
// let cryptosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,XLM,EOS,TRX,IOT,BTG,XRB,BTS,BAT,XRB&tsyms=USD";
let cryptosUrl = "https://www.cryptocompare.com/api/data/coinlist/";



function getCryptos() {
    let theResponse;
    fetch(cryptosUrl)
        .then(checkStatus) // this is only necessary to show the error if exists
        .then(blob => blob.json()) // First Promise as a Blob
        .then((res) => {
            let theResponse = res;
            // Visualize Data
            let blobData = JSON.stringify(theResponse, null, 2);
            data.innerHTML = blobData;
        // console.log(blockchainData);
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error
    }

    function checkStatus(res) {
        if (res.ok){
            return res;
        }

        let error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
}



window.addEventListener('load', function() {
    console.log('window - load - bubble');
    getCryptos();
  });