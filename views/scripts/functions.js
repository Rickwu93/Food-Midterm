// Fills the menu div html for the menu-items
const populateMenu = function(obj) {
  for (let menuItem of obj) {

    let singleMenu = document.createElement('div');
    singleMenu.classList.add('single-menu');
  
    let menuItemHTML = `
      <div class="image-container">
        <img src="${menuItem.img}" alt="picture of ${menuItem.name}"/>
      </div>
      <div class="menu-content">
        <h4>${menuItem.name}<span>${menuItem.price}<span></h4>
        <p>${menuItem.caption}</p>
        </div>
      <div style="width: 10%"></div>
      <div class="button-container">
        <button>Add To Cart</button>
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
const addToCart = function(item, price) {
  const orderItem = document.createElement('div');
  
  const itemName = document.createElement('div');
  itemName.textContent = item;
  
  const itemPrice = document.createElement('div');
  itemPrice.textContent = price;

  orderItem.append(itemName);
  orderItem.append(itemPrice);

  cartContainer.append(orderItem);
}