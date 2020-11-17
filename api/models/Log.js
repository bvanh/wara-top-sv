const Squelize = require("sequelize");
const squelize = require("../services/databases");
//const { UserInfo } = require("./Users");
const Log = squelize.log.define(
  "Logs",
  {
    userid: Squelize.CHAR,
    game_user_id: Squelize.CHAR,
    //   nickname:Squelize.CHAR
  },
  { tableName: "log_partner_charges" }
);
// const UserInfo = squelize.master.define(
//   "Users",
//   {
//     userid: Squelize.CHAR,
//   },
//   {
//     tableName: "t_profiles",
//   }
// );
Log.associate = function(models) {
  Log.hasMany(models.User, { as: "employes" });
};
module.exports = { Log };
