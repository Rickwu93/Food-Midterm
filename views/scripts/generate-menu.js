// menuArea already declared in past-orders.js

const menuContent = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIKjlrsxzNTgZ_ocm-hjeJuFtVL3Ug1asjw&usqp=CAU",
    name: "Italian Special",
    price: "$15",
    caption: "mama mia",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIKjlrsxzNTgZ_ocm-hjeJuFtVL3Ug1asjw&usqp=CAU",
    name: "Pho Lasagna",
    price: "$15",
    caption: "Fusion!",
  }
];

for (let menuItem of menuContent) {

  let singleMenu = document.createElement('div');
  singleMenu.classList.add('single-menu');

  let menuItemHTML = `
    <img src="${menuItem.img} alt="picture of ${menuItem.name}"/>
    <div class="menu-content">
      <h4>${menuItem.name}<span>${menuItem.price}<span></h4>
      <p>${menuItem.caption}<p>
    </div>   
  `;
  
  singleMenu.innerHTML = menuItemHTML;
  menuArea.append(singleMenu);
};