
// Add menu item to cart
const addToCart = function(menuItemId, menuItemsArray) {
  let itemToCart;

  // Find item from menu database that matches id from parameter
  menuItemsArray.forEach(menuItem => {
    if (menuItem.id == menuItemId) itemToCart = menuItem;
  });

  // Create HTML element to append to cart area
  const orderItem = document.createElement('div');

  const itemName = document.createElement('p');
  itemName.textContent = itemToCart.name;

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('item-price_cart');
  itemPrice.setAttribute('data', itemToCart.id);
  itemPrice.textContent = `$${(itemToCart.price / 100).toFixed(2)}`;

  orderItem.append(itemName);

  const qtyCount = document.createElement('div');
  qtyCount.classList.add('quantity');
  qtyCount.classList.add('buttons_added');
  qtyCount.innerHTML = `
  <input type="button" value="-" class="minus">
  <input type="number" step="1" min="1" max="9" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="numeric">
  <input type="button" value="+" class="plus">
  `;

  orderItem.append(qtyCount);

  orderItem.append(itemPrice);

  cartContainer.append(orderItem);

  // Add listeners to quantity fields/buttons

  const minusBtns = document.querySelectorAll('.minus');
  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateOrderTotal(menuItemsArray);
    });
  });

  const qtyInputFields = document.querySelectorAll('.qty');
  qtyInputFields.forEach(btn => {
    btn.addEventListener('change', () => {
      updateOrderTotal(menuItemsArray);
    });
  });

  const plusBtns = document.querySelectorAll('.plus');
  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateOrderTotal(menuItemsArray);
    });
  });
}

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
}
