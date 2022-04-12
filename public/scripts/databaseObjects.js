// Used for with "populateMenu" function for populating the menu div
const menuItemsObj = [
  {
    item_url: '/docs/food-images/italian3.jpeg',
    name: "Italian Special",
    price: "15",
    food_description: "mama mia",
    id: 1
  },
  {
    item_url: '/docs/food-images/italian1.jpeg',
    name: "Pho Lasagna",
    price: "15",
    food_description: "Fusion!",
    id: 2
  },
  {
    item_url: '/docs/food-images/italian3.jpeg',
    name: "Italian Special",
    price: "15",
    food_description: "mama mia",
    id: 1
  },
  {
    item_url: '/docs/food-images/italian1.jpeg',
    name: "Pho Lasagna",
    price: "15",
    food_description: "Fusion!",
    id: 2
  },
  {
    item_url: '/docs/food-images/italian3.jpeg',
    name: "Italian Special",
    price: "15",
    food_description: "mama mia",
    id: 1
  },
  {
    item_url: '/docs/food-images/italian1.jpeg',
    name: "Pho Lasagna",
    price: "15",
    food_description: "Fusion!",
    id: 2
  },
  {
    item_url: '/docs/food-images/italian3.jpeg',
    name: "Italian Special",
    price: "15",
    food_description: "mama mia",
    id: 1
  },
  {
    item_url: '/docs/food-images/italian1.jpeg',
    name: "Pho Lasagna",
    price: "15",
    food_description: "Fusion!",
    id: 2
  }
];

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
