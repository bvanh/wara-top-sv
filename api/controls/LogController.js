"use strict";
const { Log, UserInfo } = require("../models/Log");
const UserProfiles = require("../models/UserProfiles");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const attributesCharges = [
  "game_user_id",
  //  "nickname",
  [sequelize.fn("sum", sequelize.col("cash")), "total_cash"],
];
// UserInfo.belongsTo(LogCharges, { foreignKey: "userid" });
// Log.hasMany(UserInfo, { foreignKey: "userid", as: "t_profiles" });
// Log.sync()
module.exports = {
  getUsersCharges: async (req, res, next) => {
    Log.findAll({
      attributes: attributesCharges,
      group: ["game_user_id"],
      // include: {
      //   model: UserInfo,
      //   as: "tags",
      //   required: true,
      // },
      where: {
        partner_id: "A5173E6F-A2FF-4424-88E9-DA532346D738",
        //   game_user_id: "201088",
      },
      // limit: pageSize,
      // offset: pageSize * (page - 1),
      //   limit: 35,
      offset: 0,
    })
      .then(async (data) => {
        const arrUserId = await data.map((val) => Number(val.game_user_id));
        UserInfo.findAll({
          attributes: ["nickname"],
          where: {
            userid: arrUserId,
            //   game_user_id: "201088",
          },
        }).then((data1) => {
          res.status(200).send(data1);
        });
        // await data.sort(
        //   (a, b) => Number(a.total_cash) - Number(b.total_cash)
        // );
        // const dataFilter=data.filter((val)=>Number(val.total_cash))
        // res.status(200).send(arrUserId);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },
};
