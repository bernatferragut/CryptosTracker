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
                    console.log('(x)', this.listCrypto[i].completed);
                    console.log(this.listCrypto[i].nameCrypto);
                    console.log(this.listCrypto[i].symbolCrypto);
                } else {
                    console.log('()', this.listCrypto[i].completed);
                    console.log(this.listCrypto[i].nameCrypto);
                    console.log(this.listCrypto[i].symbolCrypto);
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
        this.displayCryptos();
    },

    // 4. Change
    changeCryptos: function(index, cryptoName) {
        this.listCrypto[index].nameCrypto = cryptoName;
        this.displayCryptos();                      
    },

    // 5. Delete
    deleteCrypto: function(index) {
        this.listCrypto.splice(index,1);
        this.displayCryptos();
    },

    // 6. Crypto Completed
    completedCrypto: function(position) {
        let cryptoSelected = this.listCrypto[position];
        cryptoSelected.completed = !cryptoSelected.completed;
        this.displayCryptos();
    },
 
    // 7. Toggle All
    toggleAll: function() {
        let allCryptos = this.listCrypto.length;
        let completedCryptos = 0;
        // get number of completed Cryptos
        for (let i=0; i< allCryptos; i++) {
            if(this.listCrypto[i]).completed === true) {
                completedCrypto ++;
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

// Tests
cryptos.addCryptos({name:'bitcoin', symbol: 'BTC', hodl: 2000, market: 40000});
cryptos.addCryptos({name:'eos', symbol: 'EOS', hodl: 6000, market: 10000});
console.log('cryptos object: ', cryptos);
// cryptos.displayCryptos();
cryptos.completedCrypto(0);
cryptos.completedCrypto(1);
// cryptos.displayCryptos();

