// Add menu-items to menu area on page load
populateMenu(menuItemsArray);

// Add listeners to menu buttons after buttons are generated
addButtonListeners();

// Re-populate menu area when "MENU" button clicked in header
menuBtn.addEventListener('click', () => {
  populateMenu(menuItemsArray);
  addButtonListeners();
});

// Display past-orders in the menu area when PAST ORDERS button clicked
pastOrdersBtn.addEventListener('click', () => {
  populatePastOrders(pastOrdersObj);
});

// If user is logged in display message
if (checkForLoggedIn(userInfoObj)) {
  displayLoggedInEmail(userInfoObj);
};

// Update total if item is added
cartContainer.addEventListener('DOMNodeInserted', () => {
  updateOrderTotal(menuItemsArray);
  console.log(customerMessage);
  customerMessage.value = customerSMSMessage();
  restaurantMessage.value = restaurantSMSMessage();
});

// Update total if item is removed.
cartContainer.addEventListener('DOMNodeRemoved', () => {
  updateOrderTotal(menuItemsArray);
  customerMessage.value = customerSMSMessage();
  restaurantMessage.value = restaurantSMSMessage();
});

// cartForm.addEventListener('submit', () => {
//   console.log('Form submit');
// });

checkoutBtn.addEventListener('click', () => {
  // Prevent texts from being sent on empty orders
  const orderedItems = document.querySelectorAll('.menu-item_name');
  if (orderedItems.length === 0) {
    alert('There is nothing in your cart.');
    return;
  }
});