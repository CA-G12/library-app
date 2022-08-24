const connection = require('../config/connections');

const getData = () => connection.query('select * from books');

module.exports = getData;
