const Squelize = require("sequelize");
const squelize = require("../services/databases");

const User = squelize.main.define(
  "Users",
  {
    userid: Squelize.CHAR,
  },
  { tableName: "t_user_info" }
);

module.exports = User;
