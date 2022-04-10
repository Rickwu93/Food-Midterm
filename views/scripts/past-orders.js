const pastOrdersBtn = document.querySelector('.past-orders');
const menuArea = document.querySelector('.menu');

const ordersObj = {
  email: 'customer@one.com',
  orders: [
    {
      dish: 'House Special Pho',
      quantity: 1,
      specialInstructions: 'No onions or basil please.'    
    },
    
  ]
}


pastOrdersBtn.addEventListener('click', () => {
  menuArea.innerHTML = '';
});