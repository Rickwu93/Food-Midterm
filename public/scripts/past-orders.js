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