const gatherOrderInfo = function() {
  let orders = [];
  let message = '';

  const orderedItems = document.querySelectorAll('.menu-item_name');
  const itemQuantities = document.querySelectorAll('.qty');

  for (let i = 0; i < orderedItems.length; i++) {
    let menuItemName = orderedItems[i].textContent;
    console.log(menuItemName);
    let qty = itemQuantities[i].value;
    let singleOrder = {};

    singleOrder['menuItem'] = menuItemName;
    singleOrder['qty'] = qty;
    menuItemsArray.forEach(element => {
      if (element.name === menuItemName) {
        singleOrder['price'] = ((element.price * qty) / 100).toFixed(2);
      }
    });

    orders.push(singleOrder)
   }
   
};

// for (let order of orders) {
//   message += `${order.menuItem} qty: ${order.qty}  $${order.price}\n`
// }
// return message;