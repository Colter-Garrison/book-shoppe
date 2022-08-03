-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS author_and_book CASCADE;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  dob DATE,
  pob VARCHAR
);

CREATE TABLE author_and_book (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id INT NOT NULL,
  book_id INT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books (title, released) VALUES
(
  'The Name of the Wind',
  2007
),
(
  'The Wise Mans Fear',
  2011
),
(
  'American Gods',
  2011
),
(
  'Anansi Boys',
  2005
),
(
  'Good Omens',
  2006
);

INSERT INTO authors (name, dob, pob) VALUES
(
  'Patrick Rothfuss',
  '1973-06-06',
  'Madison, Wisconsin'
),
(
  'Neil Gaiman',
  '1960-11-10',
  'Portchester, Hampshire, England'
),
(
  'Terry Pratchett',
  '1948-04-28',
  'Buckinghamshire, England'
);

INSERT INTO author_and_book (book_id, author_id) VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 2),
  (5, 3);