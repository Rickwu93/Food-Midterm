const gatherOrderInfo = function() {
  let orderObject = {};

  const orderedItems = document.querySelectorAll('.menu-item_name');
  const itemQuantities = document.querySelectorAll('.qty');

  for (let i = 0; i < orderedItems.length; i++) {
    let itemId = orderedItems[i].getAttribute('data');
    let qty = itemQuantities[i].value;

    orderObject
  }
};