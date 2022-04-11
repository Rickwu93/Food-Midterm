const populateMenu = function(obj) {
  for (let menuItem of obj) {

    let singleMenu = document.createElement('div');
    singleMenu.classList.add('single-menu');
  
    let menuItemHTML = `
      <div class="image-container">
        <img src="${menuItem.img} alt="picture of ${menuItem.name}"/>
      </div>
      <div class="menu-content">
        <h4>${menuItem.name}<span>${menuItem.price}<span></h4>
        <p>${menuItem.caption}</p>
        </div>
      <div style="width: 10%"></div>
      <div class="button-container">
        <button>Add To Cart</button>
      </div>
    
    `;
    
    singleMenu.innerHTML = menuItemHTML;
    menuArea.append(singleMenu);
  };
};