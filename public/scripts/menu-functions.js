// Fetch menu_items from database and return object
const returnMenu = function() {
  function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }
  return JSON.parse(httpGet('/api/menu')).menuItems;
}

const addButtonListeners = function() {
  const addToCartBtns = document.querySelectorAll('.add-to_cart');
  addToCartBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const menuItemId = e.target.getAttribute('data');
      addToCart(menuItemId, menuItemsArray);
    });
  });
}

// Fills the menu div html for the menu-items
const populateMenu = function(menuItemsArray) {
  menuArea.innerHTML = `
    <div class="title">
      <h4><span>ERLS: Italian Vietnamese Fusion</span>Menu:</h4>
    </div>
    <div class="tabs">
      <button id="mains">Mains</button>
      <button class="soups">Soups</button>
      <button class="sandwiches">Sandwiches</button>
      <button class="drinks">Drinks</button>
      <button class="desserts">Desserts</button>
      <button class="bubble-tea">Bubble Tea </button>
    </div>
  `;

  for (let menuItem of menuItemsArray) {
     
    let singleMenu = document.createElement('div');
    singleMenu.classList.add('single-menu');

    let menuItemHTML = `
      <div class="image-container">
        <img src="${menuItem.item_url}" alt="picture of ${menuItem.name}"/>
      </div>
      <div class="menu-content">
        <h4>${menuItem.name}<span>$${(menuItem.price / 100).toFixed(2)}<span></h4>
        <p>${menuItem.food_description}</p>
        </div>
      <div style="width: 10%"></div>
      <div class="button-container">
        <button data="${menuItem.id}" class="add-to_cart">Add To Cart</button>
      </div>

    `;

    singleMenu.innerHTML = menuItemHTML;
    menuArea.append(singleMenu);
  };
};