-- 1
-- SELECT * FROM customers LIMIT 10;
-- SELECT * FROM orders LIMIT 10;
-- SELECT * FROM books LIMIT 10;

-- 2
-- SELECT * FROM pg_Indexes WHERE tablename = 'customers';
-- SELECT * FROM pg_Indexes WHERE tablename = 'orders';
-- SELECT * FROM pg_Indexes WHERE tablename = 'books';

-- 3
CREATE INDEX orders_customer_id_idx ON orders ( customer_id );
CREATE INDEX orders_book_id_idx ON orders ( book_id );

-- 4
-- EXPLAIN ANALYZE SELECT ( original_language, title, sales_in_millions ) FROM books WHERE original_language = 'french';

-- 5
-- SELECT pg_size_pretty (pg_total_relation_size('books'));
 
-- 6 & 7
-- EXPLAIN ANALYZE SELECT (title, original_language, sales_in_millions) FROM books WHERE sales_in_millions > 60 AND original_language != 'English';
CREATE INDEX books_sales_in_millions_original_language_idx ON books ( sales_in_millions, original_language);
-- EXPLAIN ANALYZE SELECT (title, original_language, sales_in_millions) FROM books WHERE sales_in_millions > 60 AND original_language != 'English';
-- SELECT pg_size_pretty (pg_total_relation_size('books'));
-- SELECT * FROM pg_Indexes WHERE tablename = 'books';

-- 8
DROP INDEX IF EXISTS books_sales_in_millions_original_language_idx;
-- SELECT * FROM pg_Indexes WHERE tablename = 'books';

-- 9
-- SELECT NOW();
-- \COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
-- SELECT NOW();
-- now
-- 2023-11-05 22:21:25.830033+00
-- now
-- 2023-11-05 22:21:26.828864+00

-- 10
DROP INDEX IF EXISTS orders_customer_id_idx;
DROP INDEX IF EXISTS orders_book_id_idx;

SELECT NOW();
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
SELECT NOW();
-- now
-- 2023-11-05 22:22:45.149107+00
-- now
-- 2023-11-05 22:22:45.496412+00
CREATE INDEX orders_customer_id_idx ON orders ( customer_id );
CREATE INDEX orders_book_id_idx ON orders ( book_id );
