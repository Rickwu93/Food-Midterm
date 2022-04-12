

// Add menu-items to menu area on page load
populateMenu(menuContentObj);

// Re-populate menu area when "MENU" button clicked in header
menuBtn.addEventListener('click', () => {
  menuArea.innerHTML = '';
  populateMenu(menuContentObj);
});

// Display past-orders in the menu area when PAST ORDERS button clicked
pastOrdersBtn.addEventListener('click', () => {
  populatePastOrders(pastOrdersObj);
});

// If user is logged in display message
if (checkForLoggedIn(userInfoObj)) {
  displayLoggedInEmail(userInfoObj);
};