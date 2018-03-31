// JS Functions creation

// 1.Cryptos Storage
let cryptosList = ['crypto 1', 'crypto 2', 'crypto 3'];
console.log('start:', cryptosList);   

// 2.Cryptos Display
function cryptosDisplay() {
    console.log(cryptosList);
}

// 3.Add new cryptos
function addCryptos(crypto) {
    cryptosList.push(crypto);
    cryptosDisplay(); 
}

// 4.Change cryptos
function changeCryptos(index, value) {
    cryptosList[index] = value;
    cryptosDisplay();
}

// 5.Delete crypto
function deleteCrypto(index) {
    cryptosList.splice(index,1);
    cryptosDisplay();
}
// JS objects creation

let cryptos = {
    // 1. list
    listCrypto: ['crypto 1', 'crypto 2', 'crypto 3'],
    // 2. Display
    displayCryptos: function() {
        console.log(this.listCrypto);
    },
    // 3. Add
    addCryptos: function(crypto) {
        this.listCrypto.push(crypto);
        this.displayCryptos();
    },

    // 4. Change
    changeCryptos: function(index, value) {
        this.listCrypto[index] = value;
        this.displayCryptos();
    },

    //5. Delete
    deleteCrypto: function(index) {
        this.listCrypto.splice(index,1);
        this.displayCryptos();
    }

};

console.log('cryptos object: ', cryptos);