const connection = require('../config/connections');

const postData = ({ bookName, description, bookImage }) => connection.query(
  {
    text: 'insert into books(book_name, description, book_image) values($1, $2, $3)',
    values: [bookName, description, bookImage],
  },
);

module.exports = postData;
