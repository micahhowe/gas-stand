-- CREATE STOCK_ITEM TABLE
CREATE TABLE stock_item ( 
id SERIAL PRIMARY KEY,
item_name VARCHAR(100),
category VARCHAR(100),
quantity INTEGER,
price INTEGER
);

-- SOME STARTING DATA
INSERT INTO stock_item
(item_name,category,quantity,price)
VALUES ('Coca-Cola','Beverages',10,199),
('Hot Dogs', 'Snacks',6,199),
('Keychain','Knick-Knacks & Toys',100,69)