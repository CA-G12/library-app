const { Pool } = require('pg');
require('dotenv').config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('database NOT Found');

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: new URL(DATABASE_URL).hostname !== 'localhost',
});

module.exports = connection;
