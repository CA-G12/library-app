BEGIN;

DROP TABLE IF EXISTS books ,genres ,authors , book_author CASCADE;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    book_name varchar (100) NOT NULL,
    genre_id FOREIGN KEY(genre_id) REFERENCES genres(id),
    description text NOT NULL,
    book_image text
);
CREATE TABLE genres(
    id SERIAL PRIMARY KEY,
    genre varchar (100) NOT NULL,
);
CREATE TABLE authors(
    id SERIAL PRIMARY KEY,
    author_name varchar (100) NOT NULL,
);
CREATE TABLE book_author(
    book_id FOREIGN KEY(book_id) REFERENCES book(id),
    author_id FOREIGN KEY(author_id) REFERENCES author(id)
);