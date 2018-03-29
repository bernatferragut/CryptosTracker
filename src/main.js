// JS main file
import { CreateElement } from './elements';


// Test Logs
let newElement = new CreateElement('button',{'id':'firstElement'},'CLICK ME', 'body');
let result = newElement.elementConstruction();
console.log('result');