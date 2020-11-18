"use strict";
const { Log, UserInfo } = require("../models/Log");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const attributesCharges = [
  "game_user_id",
  //  "nickname",
  [sequelize.fn("sum", sequelize.col("cash")), "total_cash"],
];
module.exports = {
  getUsersCharges: async (req, res, next) => {
    Log.findAndCountAll({
      attributes: attributesCharges,
      group: ["game_user_id"],
      order: sequelize.literal("total_cash DESC"),
      where: {
        partner_id: "A5173E6F-A2FF-4424-88E9-DA532346D738",
      },
      raw: true,
      // limit: pageSize,
      // offset: pageSize * (page - 1),
      limit: 20,
      offset: 0,
    })
      .then(async (data) => {
        const arrUserId = await data.rows.map((val) =>
          Number(val.game_user_id)
        );
        UserInfo.findAll({
          attributes: ["nickname", "userid"],
          where: {
            userid: arrUserId,
          },
          raw: true,
        })
          .then(async (data1) => {
            //console.log(data.count);
            const users = [];
            data.count.map((val1) => {
              data.rows.map((val2) => {
                data1.map((val3) => {
                  if (
                    val3.userid === Number(val1.game_user_id) &&
                    val3.userid === Number(val2.game_user_id)
                  ) {
                    const demo = {
                      nickname: val3.nickname,
                      game_user_id: val2.game_user_id,
                      total_cash: val2.total_cash,
                      count: val1.count,
                    };
                    users.push(demo);
                  }
                });
              });
            });
            res.status(200).send(users);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while retrieving tutorials.",
            });
          });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },
};
