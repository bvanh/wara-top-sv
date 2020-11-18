const Squelize = require("sequelize");
const squelize = require("../services/databases");
//const { UserProfiles } = require("./Users");
const Log = squelize.log.define(
  "Logs",
  {
    game_user_id: Squelize.CHAR,
  },
  {
    tableName: "log_partner_charges",
  }
);
const UserProfiles = squelize.master.define(
  "Users",
  {
    userid: Squelize.CHAR,
  },
  {
    tableName: "t_profiles",
  }
);
module.exports = { Log, UserProfiles };
