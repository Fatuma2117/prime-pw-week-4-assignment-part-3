console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem(item) {
    basket.push('grapes');
    return true;  
}
console.log('Expect true', addItem());
// addItem(26);

// Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(item){
    for (let i = 0; i < basket.length; i++) {
console.log(basket[i]);
    }     
 }
console.log(listItems());
console.log(listItems(basket));
    
//  - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
let reset = []
function empty() {
    basket = reset
    return basket
}
console.log(empty());


// Example Below
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

// Stretch Goals

 const maxItems = 5;

 function isFull() {
     if (basket < maxItems) {
         return false;
     } else  {
         return true;
     }
 }
 console.log('Expect true:', isFull())
 isFull();

//- return `false` if the basket contains *less* than max number of items
// - return `true` otherwise (equal or more than maxItems)

// Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

// function addItem(item) {
//     basket.push(26);
//     return true;  
// }
// console.log('Expect true:', addItem());
// addItem(26);




