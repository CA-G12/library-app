const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;

if (!DB_URL) throw new Error('database NOT Found');

const connection = new Pool({
  connectionString: DB_URL,
  ssl: new URL(DB_URL).hostname !== 'localhost',
});

module.exports = connection;
