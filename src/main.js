// JS objects creation
let cryptos = {
    // 1. list
    listCrypto: [],
    // 2. Display
    displayCryptos: function() {
        if(this.listCrypto.length === 0) {
            console.log('Empty Object, you should add Cryptos');
        } else {
            console.log('cryptos display: ');
            for(let i=0; i<this.listCrypto.length; i++) {
                if (this.listCrypto[i].completed === true) {
                    console.log('(x)', this.listCrypto[i].nameCrypto);
                    console.log('(x)', this.listCrypto[i].symbolCrypto);
                    console.log('(x)', this.listCrypto[i].completed);
                } else {
                    console.log('()', this.listCrypto[i].nameCrypto);
                    console.log('()', this.listCrypto[i].symbolCrypto);
                    console.log('()', this.listCrypto[i].completed);                    
                }
            }
        }
    },
    // 3. Add
    addCryptos: function(crypto) {
        this.listCrypto.push({
            nameCrypto: crypto.name,
            symbolCrypto: crypto.symbol,
            hodlCrypto: crypto.hodl,
            marketCrypto: crypto.market,
            btcNetoCrypto: crypto.btcNeto,
            usdNetoCrypto: crypto.usdNeto,
            completed: false
        });
        // this.displayCryptos();
    },

    // 4. Change
    changeCryptos: function(index, cryptoName) {
        this.listCrypto[index].nameCrypto = cryptoName;
        // this.displayCryptos();                      
    },

    // 5. Delete
    deleteCrypto: function(index) {
        this.listCrypto.splice(index,1);
        // this.displayCryptos();
    },

    // 6. Crypto Completed
    completedCrypto: function(position) {
        let cryptoSelected = this.listCrypto[position];
        cryptoSelected.completed = !cryptoSelected.completed;
        // this.displayCryptos();
    },
 
    // 7. Toggle All
    toggleAll: function() {
        let allCryptos = this.listCrypto.length;
        let completedCryptos = 0;
        // get number of completed Cryptos
        for (let i=0; i< allCryptos; i++) {
            if(this.listCrypto[i].completed === true) {
                completedCryptos ++;
            }
        }
        // Case1: if everything is true make everything false
        if( allCryptos === completedCryptos) {
            for(let i=0; i<allCryptos; i++) {
                this.listCrypto[i].completed = false;
            } 
        // Case2: if everything is false make everything true
        } else {
            for(let i=0; i<allCryptos; i++) {
                this.listCrypto[i].completed = true;
            }
        }
        this.displayCryptos();
    }
}

// Adding Cryptos Tests
cryptos.addCryptos({name:'bitcoin', symbol: 'BTC', hodl: 2000, market: 40000});
cryptos.addCryptos({name:'eOperationSystem', symbol: 'EOS', hodl: 6000, market: 10000});

// SELECTIONS
let buttonDisplay = document.getElementById('display-button');
let buttonToggle = document.getElementById('toggle-button');

// BUTTON ACTIONS
buttonDisplay.addEventListener('click', function() {
    cryptos.displayCryptos();
});

buttonToggle.addEventListener('click', function(){
    cryptos.toggleAll();
});

