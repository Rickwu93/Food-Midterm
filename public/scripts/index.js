

// Add menu-items to menu area on page load
populateMenu(menuContentObj);

// Add listeners to menu buttons after they've been generated
const addToCartBtns = document.querySelectorAll('.button-container');

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

// Add menu items to checkout area
addToCartBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.parentNode.parentNode);
  });
});


