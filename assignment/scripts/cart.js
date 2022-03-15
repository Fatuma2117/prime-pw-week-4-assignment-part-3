console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem(item) {
    basket.push(26);
    return true;  
}
console.log('Expect true', addItem());
addItem(26);

// Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(item){
    for (let i = 0; i < array.length; i++) {
console.log(basket[i]);
    }     
 }
    
//  - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array

function empty () 
