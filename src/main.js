// // JS main file
// import { CreateElement } from './elements';


// // Test creating DOM elements
// let newElement = new CreateElement('button',{'id':'firstElement'},'CLICK ME', 'body');
// newElement.elementConstruction();
// let newElement2 = new CreateElement('h1', {'id':'secondElement'}, 'THIS IS AN H1', 'div');
// newElement2.elementConstruction();

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