// Infor for displaying user's name in past-orders and email in header
const userInfoObj = {
  email: 'user@email.com',
  name: 'First Last'
}

// Used with the populatePastOrders function to display the user's past orders
const pastOrdersObj = {
  customerName: userInfoObj.name,
  orders: [
    {
      dish: 'House Special Pho',
      quantity: 1,
      specialInstructions: 'No onions or basil please.'
    },
    {
      dish: 'Pho Lasagna',
      quantity: 2,
      specialInstructions: ''
    },
    {
      dish: 'Italian Special',
      quantity: 2,
      specialInstructions: 'Extra special please.'
    }
  ]
};
