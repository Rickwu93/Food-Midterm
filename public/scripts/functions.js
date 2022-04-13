// Create event listeners for the ADD TO CART buttons
const addButtonListeners = function() {
  const addToCartBtns = document.querySelectorAll('.add-to_cart');
  addToCartBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const menuItemId = e.target.getAttribute('data');
      addToCart(menuItemId, menuItemsObj);
    });
  });
}

// Fills the menu div html for the menu-items
const populateMenu = function(menuItemsObj) {
  for (let menuItem of menuItemsObj) {

    let singleMenu = document.createElement('div');
    singleMenu.classList.add('single-menu');

    let menuItemHTML = `
      <div class="image-container">
        <img src="${menuItem.item_url}" alt="picture of ${menuItem.name}"/>
      </div>
      <div class="menu-content">
        <h4>${menuItem.name}<span>$${menuItem.price}<span></h4>
        <p>${menuItem.food_description}</p>
        </div>
      <div style="width: 10%"></div>
      <div class="button-container">
        <button data="${menuItem.id}" class="add-to_cart">Add To Cart</button>
      </div>

    `;

    singleMenu.innerHTML = menuItemHTML;
    menuArea.append(singleMenu);
  };
};

// Displays the user's past orders in the menu-area
const populatePastOrders = function(pastOrdersObj) {
  menuArea.innerHTML = '';

  // Generate HTML for customer's past orders to be displayed in menu area

  const pastOrdersDiv = document.createElement('div');
  pastOrdersDiv.classList.add('past-orders_display');

  const pastOrdersTitle = document.createElement('h3');
  pastOrdersTitle.textContent = `Past orders for: ${pastOrdersObj.customerName}`;

  // List that will display the past orders

  const displayOrders = document.createElement('ul');
  const titleBar = document.createElement('li');
  titleBar.classList.add('past-orders_titlebar');
  titleBar.classList.add('past-order_li');

  titleBar.innerHTML = `
    <span>Dish:</span>
    <span>Qty:</span>
    <span>Special Instructions:</span>
  `;
  displayOrders.append(titleBar);

  for (let order of pastOrdersObj.orders) {
    let displayOrder = document.createElement('li');
    displayOrder.classList.add('past-order_li');

    if (order.specialInstructions === '') order.specialInstructions = 'none';

    let orderDetails = `
      <span>
        ${order.dish}
      </span>
      <span>
        ${order.quantity}
      </span>
      <span>
        ${order.specialInstructions}
      </span>
    `;

    displayOrder.innerHTML = orderDetails;
    displayOrders.append(displayOrder);
  }

  pastOrdersDiv.append(pastOrdersTitle);
  pastOrdersDiv.append(displayOrders);
  menuArea.append(pastOrdersDiv);
}

// Returns true if user is logged in
const checkForLoggedIn = function() {
  return true;
};

// Display logged in as: *[user]email* in the top left of header bar
const displayLoggedInEmail = function(userInfoObj) {
  const loggedInDiv = document.createElement('div');
  loggedInDiv.classList.add('logged-in');

  const userEmailDisplay = document.createElement('span');
  userEmailDisplay.textContent = `Logged in as: ${userInfoObj.email}`;

  loggedInDiv.append(userEmailDisplay);
  headerBar.append(loggedInDiv);

}

// Add menu item to cart
const addToCart = function(menuItemId, menuItemsObj) {
  let itemToCart;

  // Find item from menu database that matches id from parameter
  menuItemsObj.forEach(menuItem => {
    if (menuItem.id == menuItemId) itemToCart = menuItem;
  });

  // Create HTML element to append to cart area
  const orderItem = document.createElement('div');

  const itemName = document.createElement('p');
  itemName.textContent = itemToCart.name;

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('item-price_cart');
  itemPrice.setAttribute('data', itemToCart.id);
  itemPrice.textContent = `$${itemToCart.price}`;

  orderItem.append(itemName);
  orderItem.append(itemPrice);

  cartContainer.append(orderItem);
}

// Update order total in cart area
const updateOrderTotal = function(menuItemsObj) {
  let total = 0;
  const orderedItems = document.querySelectorAll('.item-price_cart');
  let prices = [];

  for (let item of orderedItems) {
    let itemId = item.getAttribute('data');

    for (let menuItem of menuItemsObj) {
      if (menuItem.id == itemId) {
        total += Number(menuItem.price);
        break; // Stops duplicate items from being added, won't need with database
      }
    }
  }
  // Could send the order total to the database at this point too

  orderTotalDisplay.textContent = '';
  orderTotalDisplay.textContent = `$${total}`;
}


// Category focus for menu

menuFocusMains = function() {
document.getElementById("category.mains").focus({preventScroll:false});
}

