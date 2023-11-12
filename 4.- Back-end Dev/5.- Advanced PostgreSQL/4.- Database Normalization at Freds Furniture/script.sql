-- 1
-- SELECT * FROM store LIMIT 10;

-- 2
-- SELECT COUNT(DISTINCT(order_id)) 
-- FROM store; --100
-- SELECT COUNT(DISTINCT(customer_id)) 
-- FROM store; --80

-- 3
-- SELECT customer_id, customer_email, customer_phone FROM store WHERE customer_id = 1; --2

-- 4
-- SELECT item_1_id, item_1_name, item_1_price FROM store WHERE item_1_id = 4; --3

-- 5
CREATE TABLE customers AS
SELECT DISTINCT customer_id as id, customer_phone as phone, customer_email as email FROM store;

-- 6
ALTER TABLE customers
ADD PRIMARY KEY (id);

-- 7
CREATE TABLE items AS
SELECT DISTINCT item_1_id as id, item_1_name as name, item_1_price as price FROM store
UNION 
SELECT DISTINCT item_2_id as id, item_2_name as name, item_2_price as price FROM store WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as id, item_3_name as name, item_3_price as price FROM store WHERE item_3_id IS NOT NULL;

-- 8
ALTER TABLE items
ADD PRIMARY KEY (id);

-- 9 
CREATE TABLE order_items AS
SELECT store.order_id, items.id as item_id
FROM store, items
WHERE store.item_1_id = items.id
UNION 
SELECT store.order_id, items.id as item_id
FROM store, items
WHERE store.item_2_id = items.id
UNION
SELECT store.order_id, items.id as item_id
FROM store, items
WHERE store.item_3_id = items.id;
-- SELECT * FROM order_items ORDER BY item_id LIMIT 10;

-- 10
CREATE TABLE orders AS
SELECT DISTINCT order_id as id, order_date as date, customer_id FROM store;

-- 11
ALTER TABLE orders
ADD PRIMARY KEY (id);

-- 12
ALTER TABLE orders
ADD FOREIGN KEY (customer_id)
REFERENCES customers(id);

ALTER TABLE order_items
ADD FOREIGN KEY (item_id)
REFERENCES items(id);

-- 13
ALTER TABLE order_items
ADD FOREIGN KEY (order_id)
REFERENCES orders(id);

-- 14
-- EXPLAIN ANALYZE 
-- SELECT count(customer_email) 
-- FROM store 
-- WHERE order_date > '2019-07-25';

-- 15
-- EXPLAIN ANALYZE 
-- SELECT count(email) 
-- FROM customers, orders
-- WHERE customers.id = orders.customer_id
-- AND date > '2019-07-25';

-- 16
WITH all_items AS (
  SELECT item_1_id as item_id
  FROM store
  UNION ALL
  SELECT item_2_id as item_id
  FROM store
  WHERE item_2_id IS NOT NULL
  UNION ALL
  SELECT item_3_id as item_id
  FROM store
  WHERE item_3_id IS NOT NULL
) SELECT item_id, count(*)
FROM all_items
GROUP BY item_id
ORDER BY item_id;

-- 17
SELECT item_id, count(*)
FROM order_items, orders
WHERE order_items.order_id = orders.id
GROUP BY item_id
ORDER BY item_id;