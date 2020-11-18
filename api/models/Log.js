const Squelize = require("sequelize");
const squelize = require("../services/databases");
//const { UserInfo } = require("./Users");
const Log = squelize.log.define(
  "Logs",
  {
    game_user_id: Squelize.CHAR,
  },
  {
    tableName: "log_partner_charges",
  }
);
const UserInfo = squelize.master.define(
  "Users",
  {
    userid: Squelize.CHAR,
  },
  {
    tableName: "t_profiles",
  }
);
// Log.belongsToMany(UserInfo, {
//   through: "tutorial_tag",
//   as: "tags",
//   foreignKey: "game_user_id",
// });

// UserInfo.belongsToMany(Log, {
//   through: "tutorial_tag",
//   as: "tutorials",
//   foreignKey: "userid",
// });
module.exports = { Log, UserInfo };
