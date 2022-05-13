require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'contacts_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3002,
    logging: false,
    headers: false,

  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'contacts_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      timestamps: false,
  },
  logging: false,
  headers: false,

  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'contacts_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
};