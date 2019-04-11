/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var count = 0;
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    optionEl.value = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(product, quantity);  //initiated
  cart.saveToLocalStorage(); //
  updateCounter(event);
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(product, quantity) {
  // TODO: suss out the item picked from the select list
  var item = new CartItem(product,quantity);
  cart.items.push(item);
  // TODO: get the quantity
  
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(event) {
  var spanEL = document.getElementById('itemCount');
  count++;
  spanEL.innerHTML = '('+ count + ')';


}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  for(var i = 0; i < Product.allProducts.length; i++){
    console.log('hit for loop');
    if(event.target.items.value === Product.allProducts[i].name){            //check this when click to submit
      console.log('target match');
      var cartItem = document.createElement('p');
      cartItem.textContent = `${product} ${quantity}`;
    }
  }
  document.getElementById('cartContents').appendChild(cartItem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
