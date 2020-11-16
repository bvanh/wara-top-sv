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
const UserInfo = squelize.master.define(
  "Userinfo",
  {
    userid: Squelize.CHAR,
  },
  {
    tableName: "t_profiles",
  }
);
// UserInfo.associate = (models) => {
//   UserInfo.hasMany(LogCharges.log_partner_charges, { foreignKey: "userid" });
// };
module.exports = { User, UserInfo };
