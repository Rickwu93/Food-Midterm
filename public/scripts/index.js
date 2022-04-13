// Add menu-items to menu area on page load
const menuItemsArray = returnMenu();

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
});
// Update total if item is removed.
cartContainer.addEventListener('DOMNodeInserted', () => {
  console.log('order change');
  updateOrderTotal(menuItemsArray);
});
