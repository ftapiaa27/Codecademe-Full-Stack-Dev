-- 1 
-- SELECT * FROM customers LIMIT 10;
-- SELECT * FROM orders LIMIT 10;
-- SELECT * FROM books LIMIT 10;

-- 2 
-- SELECT * FROM pg_Indexes 
-- WHERE tablename = 'customers'
-- OR tablename = 'orders'
-- OR tablename = 'books';

-- 3 
-- EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;

-- 4 
CREATE INDEX  orders_customer_id_quantity_more_than_18_idx ON orders(customer_id, quantity) WHERE quantity > 18;

-- 5
-- EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;

-- 6
ALTER TABLE customers 
ADD CONSTRAINT customers_pkey
PRIMARY KEY (customer_id); 

-- 7
-- SELECT * FROM pg_Indexes WHERE tablename = 'customers';
-- SELECT * FROM customers LIMIT 10;
CLUSTER customers USING customers_pkey;
CLUSTER customers;
-- SELECT * FROM customers LIMIT 10;

-- 8 
CREATE INDEX orders_customer_id_book_id_idx ON orders(customer_id, book_id);

-- 9 
DROP INDEX orders_customer_id_book_id_idx;
CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders(customer_id, book_id, quantity);

-- 10
-- SELECT * FROM pg_Indexes 
-- WHERE tablename = 'books';
CREATE INDEX books_author_title_idx ON books(author, title);
-- SELECT * FROM pg_Indexes 
-- WHERE tablename = 'books';

-- 11 -> 13
-- EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) > 100;
CREATE INDEX orders_total_price ON orders((quantity * price_base));
-- EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) > 100;

