const Pool = require('pg').Pool;

const database = new Pool({
  user: 'postgres',
  password: 'admin',
  database: 'cca',
  host: 'localhost',
  port: 5432
});

module.exports = database;