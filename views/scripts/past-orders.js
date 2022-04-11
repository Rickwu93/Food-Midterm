const ordersObj = {
  customerName: 'First Last',
  orders: [
    {
      dish: 'House Special Pho',
      quantity: 1,
      specialInstructions: 'No onions or basil please.'    
    },
    {
      dish: 'Pho Lasagna',
      quantity: 2,
      specialInstructions: ''
    },
    {
      dish: 'Italian Special',
      quantity: 2,
      specialInstructions: 'Extra special please.'
    }
  ]
}

/* When "PAST ORDERS" button in the header is clicked the menu is cleared and past orders are displayed */

pastOrdersBtn.addEventListener('click', () => {
  // Clear menu items
  menuArea.innerHTML = '';

  // Generate HTML for customer's past orders to be displayed in menu area

  const pastOrdersDiv = document.createElement('div');
  pastOrdersDiv.classList.add('past-orders_display');

  const pastOrdersTitle = document.createElement('h3');
  pastOrdersTitle.textContent = `Past orders for: ${ordersObj.customerName}`;
  
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
  
  for (let order of ordersObj.orders) {
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
});

