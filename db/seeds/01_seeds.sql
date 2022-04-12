INSERT INTO customers (name, email, password, phone)
  VALUES('Eugene Helland', Eugene@gmail.com, 'password', '4032302333')
  VALUES('Lucus Riccioni', Lucus@hotmail.com, 'password', '4034339554')
  VALUES('Ricky Wu', Ricky@yahoo.com, 'password', '4033234344')

INSERT INTO menu_items (name, food_description, price, item_url, type_of_item)
  VALUES
  ('Phở Đặc Biệt', 'Rare beef, flank, tendon, tripe, beefball', 1500, ../../public/docs/food-images/house-special.jpeg, 'main'),
  ('Phở tái', 'Rare beef, beefball', 1300, ../../public/docs/food-images/pho2.jpeg, 'main'),
  ('Phở satế bò', 'Spicy peanut sate soup, rare beef or chicken', 1600, ../../public/docs/food-images/pho3.jpeg, 'main'),
  ('Phở Fettuccine', 'Fettuccine noodles, special sauce', 1800, ../../public/docs/food-images/italian2.jpeg, 'main'),
  ('Phở noodles with Meat Sauce', 'Noodles, meat sauce', 1700, ../../public/docs/food-images/italian3.jpeg, 'main'),
  ('Phở Lasagne', 'Oven baked Phở noodles with ricotta cheese, tomato sauce', 2000, ../../public/docs/food-images/italian4.jpeg, 'main'),
  ('Phở Seafood', 'Shrimp, squid, crabstick, vegetable', 1800, ../../public/docs/food-images/seafood-pho.jpeg, 'main'),
  ('Phở Vegetarian', 'Vegetable and tofu, fried shallots', 1800, ../../public/docs/food-images/vegetarian-pho.jpeg, 'main'),
  ('Saigon beer', '355ml', 900, ../..public/docs/food-images/saigon.jpeg, 'drink'),
  ('Buddha beer', '330ml', 900, ../..public/docs/food-images/buddha.jpeg, 'drink'),
  ('Peroni beer', '330ml', 900, ../..public/docs/food-images/peroni.jpeg, 'drink'),
  ('Birra Moretti beer, "330ml', 1000, ../..public/docs/food-images/birra.jpeg, 'drink'),
  ('Assorted pop', '330ml', 400, ../..public/docs/food-images/pop.jpeg, 'drink'),
  ('Vietnamese Italian coffee', 'Cold Italian coffee with condensed milk', 600, ../..public/docs/food-images/coffee.jpeg, 'drink'),
  ('Ice cream waffle cone', 'Vanilla, Strawberry, Mango, Chocolate, Durian', 500, ../..public/docs/food-images/wafflecone.jpeg, 'dessert');


INSERT INTO orders (customer_id, start_time, finish_time, order_status, special_instructions)
  VALUES
  (1, '4/11/2022, 4:20:01 PM', '4/11/2022, 5:01:01 PM', 'complete', 'fully cooked meat'),
  (2, '4/12/2022, 5:20:01 PM', '4/12/2022, 6:01:01 PM', 'complete', 'extra sauce'),
  (3, '4/13/2022, 6:00:01 PM', '4/13/2022, 6:31:07 PM', 'complete', 'extra forks'),
  (4, '4/14/2022, 9:00:02 PM', '4/14/2022, 10:01:01 PM', 'complete', 'have a nice day!');

INSERT INTO ordered_items (order_id, menu_item_id, quantity)
  VALUES
  (1, 1, 3), 
