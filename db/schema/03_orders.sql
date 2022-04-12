DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  start_time VARCHAR(255) NOT NULL,
  finish_time VARCHAR(255),
  order_status TEXT NOT NULL,
  special_instructions TEXT
);
