const pastOrdersBtn = document.querySelector('.past-orders');
const menuArea = document.querySelector('.menu');

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
    }
  ]
}


pastOrdersBtn.addEventListener('click', () => {
  // Clear menu items
  menuArea.innerHTML = '';

  let pastOrdersDiv = document.createElement('div');
  pastOrdersDiv.classList.add('past-orders');

  let pastOrdersTitle = document.createElement('h3');
  pastOrdersTitle.textContent = `Past orders for: ${ordersObj.customerName}`;

  // List that will display the past orders
  let displayOrders = document.createElement('ul');

  for (let order of ordersObj.orders) {
    let displayOrder = document.createElement('li');
    console.log('DISPLAYORDER: ', displayOrder);

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