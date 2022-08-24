BEGIN;

DROP TABLE IF EXISTS books ,genres ,authors , book_author CASCADE;
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre varchar(100) NOT NULL
);

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    book_name varchar(100) NOT NULL,
    description text NOT NULL,
    book_image text,
    genre_id INTEGER references genres(id)
);



CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    author_name varchar(100) NOT NULL
);

CREATE TABLE book_author (
   book_id INTEGER references books(id),
   author_id INTEGER references authors(id)
);

insert into books (book_name, description, book_image)
 values('book', 'Here you will find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx6fijcO9DhjBN6I8y0BfAwLNTE0ykrlTTKrp5Gtwvfkx_CcjlmAL&usqp=CAE&s'),
  ('book', 'Here you will find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx6fijcO9DhjBN6I8y0BfAwLNTE0ykrlTTKrp5Gtwvfkx_CcjlmAL&usqp=CAE&s'),

   ('book', 'Here you will find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx6fijcO9DhjBN6I8y0BfAwLNTE0ykrlTTKrp5Gtwvfkx_CcjlmAL&usqp=CAE&s');

COMMIT;