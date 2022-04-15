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
  <div class="menu-navbar">
    <div class="title">
      <h2 style='font-size: 2em;'><Menu>ERLS: <span style="font-weight: 300; font-style: italic;">Italian Vietnamese Fusion</span></h4>
    </div>
    <div class="tabs">
      <button class="mains">Mains</button>
      <button class="soups">Soups</button>
      <button class="sandwiches">Sandwiches</button>
      <button class="drinks">Drinks</button>
      <button class="desserts">Desserts</button>
      <button class="bubble-tea">Bubble Tea </button>
    </div>
  </div>
  <div class="main menu-category"></div>
  <div class="soup menu-category"></div>
  <div class="sandwich menu-category"></div>
  <div class="drink menu-category"></div>
  <div class="dessert menu-category"></div>
  <div class="bubbletea menu-category"></div>
  `;

  // Menu categories
  const menuTitleBar = document.querySelector('.menu-title_bar');
  const menuMains = document.querySelector('.main');
  const menuSoups = document.querySelector('.soup');
  const menuSandwiches = document.querySelector('.sandwich');
  const menuDrinks = document.querySelector('.drink');
  const menuDessert = document.querySelector('.dessert');
  const menuBubbleTea = document.querySelector('.bubbletea');

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

    switch (menuItem.type_of_item) {
      case 'main':
        menuMains.append(singleMenu);
        break;
      case 'soup':
        menuSoups.append(singleMenu);
        break;
      case 'sandwich':
        menuSandwiches.append(singleMenu);
        break;
      case 'drink':
        menuDrinks.append(singleMenu);
        break;
      case 'dessert':
        menuDessert.append(singleMenu);
        break;
      case 'bubbletea':
        menuBubbleTea.append(singleMenu);
        break;
    }
    // menuArea.append(singleMenu);
  };
};