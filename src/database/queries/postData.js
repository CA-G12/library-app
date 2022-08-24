const connection = require('../config/connections');

const postData = ({ book_name, description, book_image }) => connection.query(
  'insert into users(name, location) values($1, $2, $3) returning *',
  [book_name, description, book_image],
);

module.exports = postData;
