DROP TABLE IF EXISTS menu_items CASCADE;


CREATE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  food_description TEXT,
  price INTEGER NOT NULL,
  item_url VARCHAR(255),
  type_of_item VARCHAR(255)
);
