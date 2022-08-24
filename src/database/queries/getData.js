const connection = require('../config/connections');

const getData = () => {
  console.log(111);
  return connection.query('select * from books');
};

module.exports = getData;
