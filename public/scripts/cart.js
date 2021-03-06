// Add menu item to cart
const addToCart = function(menuItemId, menuItemsArray) {

  // Find item from menu database that matches id from parameter
  menuItemsArray.forEach(menuItem => {
    if (menuItem.id == menuItemId) itemToCart = menuItem;
  });

const element = document.getElementsByName(itemToCart.name);

if (element.length === 0) {

  // Create HTML element to append to cart area
  const orderItem = document.createElement('div');
  orderItem.setAttribute('name', itemToCart.name);


  const itemName = document.createElement('p');
  itemName.classList.add('menu-item_name');
  itemName.textContent = itemToCart.name;

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('item-price_cart');
  itemPrice.setAttribute('data', itemToCart.id);
  itemPrice.textContent = `$${(itemToCart.price / 100).toFixed(2)}`;

  orderItem.append(itemName);

  let qtyCount = document.createElement('div');
  qtyCount.classList.add('quantity');
  qtyCount.classList.add('buttons_added');
  qtyCount.innerHTML = `
  <input type="button" value="-" class="minus">
  <input type="number" step="1" min="0" max="99" data-name="${itemToCart.name}" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
  <input type="button" value="+" class="plus">
  `;

  orderItem.append(qtyCount);
  orderItem.append(itemPrice);
  cartContainer.append(orderItem);

  // Add listeners to quantity fields/buttons
  const minusBtns = document.querySelectorAll('.minus');
  const qtyInputFields = document.querySelectorAll('.qty');
  const plusBtns = document.querySelectorAll('.plus');

  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => updateOrderTotal(menuItemsArray), 50);
    });
  });

  qtyInputFields.forEach(btn => {
    btn.addEventListener('change', () => {
      updateOrderTotal(menuItemsArray);
    });
  });

  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => updateOrderTotal(menuItemsArray), 50);
    });
  });

  // Deletes element if quantity hits 0
  cartContainer.onchange = function(e) {
    const quantity = e.target.closest('.input-text.qty.text').value;
    const name = e.target.dataset.name;
    if (e.target && quantity <= 0) {
      removeElement(name);
    }
  };
} else {
}
};

// Update order total in cart area
const updateOrderTotal = function(menuItemsArray) {
  let total = 0;
  const orderedItems = document.querySelectorAll('.item-price_cart');
  const itemQuantities = document.querySelectorAll('.qty');

  for (let i = 0; i < orderedItems.length; i++) {
    let itemId = orderedItems[i].getAttribute('data');
    let qty = itemQuantities[i].value;

    for (let menuItem of menuItemsArray) {
      if (menuItem.id == itemId) {
        total += Number(menuItem.price) * qty;
      }
    }
  }

  // Could send the order total to the database at this point too
  orderTotalDisplay.textContent = `$${(total / 100).toFixed(2)}`;
};

// function to remove html element
const removeElement = function(name) {
  const element = document.getElementsByName(name);
  while (element.length > 0) {
    $(element).remove();
  }
};
