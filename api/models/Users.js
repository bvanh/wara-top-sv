const Squelize = require("sequelize");
const squelize = require("../services/databases");
const LogCharges = require("./Log");
const User = squelize.main.define(
  "Users",
  {
    userid: Squelize.CHAR,
  },
  { tableName: "t_user_info" }
);
const waraUser = squelize.master.define(
  "waraUser",
  {
    uid: Squelize.CHAR,
  },
  {
    tableName: "t_user",
  }
);
const cubegameUser = squelize.cubegame.define(
  "cubegameUser",
  {
    uid: Squelize.CHAR,
  },
  {
    tableName: "users",
  }
);
module.exports = { User, waraUser, cubegameUser };
