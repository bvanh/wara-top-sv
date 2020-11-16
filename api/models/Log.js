const Squelize = require("sequelize");
const squelize = require("../services/databases");
//const { UserInfo } = require("./Users");
const Log = squelize.log.define(
  "Logs",
  {
    userid: Squelize.CHAR,
  },
  { tableName: "log_partner_charges" }
);
const UserInfo = squelize.master.define(
  "Userinfo",
  {
    userid: Squelize.CHAR,
  },
  {
    tableName: "t_profiles",
  }
);
//Log.belongsTo(UserInfo, { foreignKey: "userId" });
UserInfo.belongsTo(Log, { foreignKey: "userId" });
Log.hasMany(UserInfo, { foreignKey: "userId" });
module.exports = Log;
