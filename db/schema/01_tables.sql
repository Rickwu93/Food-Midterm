-- Drop and recreate tables
-- add tables for customer, menu_items, orders, ordered_items

DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS ordered_items CASCADE;


CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL
);

CREATE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  food_description TEXT,
  price INTEGER NOT NULL,
  item_url VARCHAR(255),
  type_of_item VARCHAR(255)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  start_time VARCHAR(255) NOT NULL,
  finish_time VARCHAR(255),
  order_status TEXT NOT NULL,
  special_instructions TEXT
);


CREATE TABLE ordered_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id),
  quantity INTEGER NOT NULL
);

