-- Open up psql and create a sql_lab database if you haven't already done so.
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it

-- Create a computers table
-- CREATE TABLE computers ( id serial, make varchar(20), model varchar(20), cpu_speed int, memory_size int, price int, release_date varchar(20), photo_url text, storage_amount int, number_usb_ports int, number_firewire_ports int, number_thunderbolt_ports int);

-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports


-- Insert 4 computers into the computers table
-- INSERT INTO computers (make, model, cpu_speed, memory_size, price, release_date, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
-- VALUES
-- ('IBM', 'Carbon X1', 800, 1000, 1500, 'February', 'https://images-na.ssl-images-amazon.com/images/I/41tawi9%2BRcL._AC_SX466_.jpg', 1000, 2, 1, 0),
-- ('apple', 'macbook pro', 800, 1000, 1500, 'February', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-gallery2-201807_GEO_US_FMT_WHH?wid=4000&hei=3072&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1530142199588', 1000, 2, 1, 1),
-- ('Dell', 'POS', 10, 10, 5, 'February', 'https://images-na.ssl-images-amazon.com/images/I/51KT1wwt5XL._AC_SL1000_.jpg', 10, 1, 0, 0),
-- ('Some other Brand', 'something', 10, 10, 5, 'February', 'https://static.turbosquid.com/Preview/001174/372/PK/DHQ.jpg', 1, 0, 0, 0);



-- Select all entries from the computers table
-- SELECT * FROM computers;

-- HUNGRY FOR MORE?
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
