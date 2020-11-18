const testing = {
  main: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    timezone: "+07:00",
    port: "23306",
  },
  master: {
    database: process.env.DATABASE_MASTER_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    timezone: "+07:00",
    port: "23306",
  },
  log: {
    database: process.env.DATABASE_LOG_NAME,
    username: process.env.DATABASE_LOG_USER,
    password: process.env.DATABASE_LOG_PASS,
    host: process.env.DATABASE_LOG_HOST,
    dialect: "mysql",
    timezone: "+07:00",
  },
};

const production = {
  main: {
    database: process.env.DB_NAME_MAIN_PROD,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "+07:00",
  },
  duo: {
    database: process.env.DB_NAME_DUO_PROD,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "+07:00",
  },
  log: {
    database: process.env.DB_NAME_LOG_PROD,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "+07:00",
  },
  logcash: {
    database: process.env.DB_NAME_LOG_CASH_PROD,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "+07:00",
  },
};

module.exports = {
  testing,
  production,
};
