// Create event listeners for the ADD TO CART buttons
const addButtonListeners = function() {
  const addToCartBtns = document.querySelectorAll('.add-to_cart');
  addToCartBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const menuItemId = e.target.getAttribute('data');
      addToCart(menuItemId, menuItemsArray);
    });
  });
}

// Fetch menu_items from database and return object
const returnMenu = function() {
  function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }
  return JSON.parse(httpGet('/api/menu')).menuItems;
}

// Fills the menu div html for the menu-items
const populateMenu = function(menuItemsArray) {
  // menuArea.innerHTML = '';

  // const menuTitleBar = document.createElement('div');

  menuArea.innerHTML = `
    <div class="title">
      <h4><span>ERLS: Italian Vietnamese Fusion</span>Menu:</h4>
    </div>
    <div class="tabs">
      <button id="mains">Mains</button>
      <button class="soups">Soups</button>
      <button class="sandwiches">Sandwiches</button>
      <button class="drinks">Drinks</button>
      <button class="desserts">Desserts</button>
      <button class="bubble-tea">Bubble Tea </button>
    </div>
  `;

  // menuTitleBar.innerHTML = titleContent;
  // menuArea.append(menuTitleBar);

  for (let menuItem of menuItemsArray) {
     
    let singleMenu = document.createElement('div');
    singleMenu.classList.add('single-menu');

    let menuItemHTML = `
      <div class="image-container">
        <img src="${menuItem.item_url}" alt="picture of ${menuItem.name}"/>
      </div>
      <div class="menu-content">
        <h4>${menuItem.name}<span>$${(menuItem.price / 100).toFixed(2)}<span></h4>
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
  <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
  <input type="button" value="+" class="plus"> 
  `;
 
  orderItem.append(qtyCount);

  orderItem.append(itemPrice);

  cartContainer.append(orderItem);
}

// Update order total in cart area
const updateOrderTotal = function(menuItemsArray) {
  let total = 0;
  const orderedItems = document.querySelectorAll('.item-price_cart');

  for (let item of orderedItems) {
    let itemId = item.getAttribute('data');

    for (let menuItem of menuItemsArray) {
      if (menuItem.id == itemId) {
        total += Number(menuItem.price);
        break; // Stops duplicate items from being added, won't need with database
      }
    }
  }
  // Could send the order total to the database at this point too

  orderTotalDisplay.textContent = '';
  orderTotalDisplay.textContent = `$${(total / 100).toFixed(2)}`;
}
