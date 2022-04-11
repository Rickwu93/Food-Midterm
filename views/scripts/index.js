// Add menu-items to menu area on page load
populateMenu(menuContentObj);

// Re-populate menu area when "MENU" button clicked in header
const menuBtn = document.querySelector('.display-menu');
console.log('menuBtn: ', menuBtn);
menuBtn.addEventListener('click', () => {
  menuArea.innerHTML = '';
  populateMenu(menuContentObj);
});