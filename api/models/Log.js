const Squelize = require("sequelize");
const squelize = require("../services/databases");
const { UserInfo } = require("./Users");
const Log = squelize.log.define(
  "Logs",
  {
    userid: Squelize.CHAR,
  },
  { tableName: "log_partner_charges" }
);

module.exports = Log;
