// JS HTML Element Functions
class CreateElement {
    constructor(_elementName, _atributes, _text, _selectedTarget){
        this.elementName = _elementName||'div' ;
        this.atributes = _atributes||{'name':'value'};
        this.text = _text||'';
        this.selectedTarget = _selectedTarget||'body';
        this.element;
        this.textNode;
        this.target;

    }
    // 1.Element construction
    elementConstruction() {
        this.element = document.createElement(this.elementName);
        this.element.setAttribute(this.atributes.name, this.atributes.value);
        this.textNode = document.createTextNode(this.text);
        this.element.appendChild(this.textNode);
        this.target = document.querySelector(this.selectedTarget);
        this.target.appendChild(this.element);
    }
}
// module.exports = { CreateElement };

// Test creating DOM elements
// let newElement = new CreateElement('button',{'id':'firstElement'},'CLICK ME', 'body');
// newElement.elementConstruction();
// let newElement2 = new CreateElement('h1', {'id':'secondElement'}, 'THIS IS AN H1', 'div');
// newElement2.elementConstruction();
// import { CreateElement } from './elements';