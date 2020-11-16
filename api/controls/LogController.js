"use strict";
const LogCharges = require("../models/Log");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { UserInfo } = require("../models/Users");
const attributesCharges = [
  "game_user_id",
  // "nickname",
  [sequelize.fn("sum", sequelize.col("cash")), "total_cash"],
];
// UserInfo.belongsTo(LogCharges, { foreignKey: "userid" });
// LogCharges.hasMany(UserInfo, { foreignKey: "userid" });
module.exports = {
  getUsersCharges: async (req, res, next) => {
    LogCharges.findAndCountAll({
      attributes: attributesCharges,
      group: ["game_user_id"],
      where: {
        partner_id: "A5173E6F-A2FF-4424-88E9-DA532346D738",
      //   game_user_id: "201088",
      },
      //   limit: 35,
      offset: 0,
    })
      .then((data) => {
        // await data.sort(
        //   (a, b) => Number(a.total_cash) - Number(b.total_cash)
        // );
        // const dataFilter=data.filter((val)=>Number(val.total_cash))
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },
};
