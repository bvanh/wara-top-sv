"use strict";
const { Log, UserProfiles } = require("../models/Log");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const attributesCharges = [
  "game_user_id",
  //  "nickname",
  [sequelize.fn("sum", sequelize.col("cash")), "total_cash"],
  [sequelize.fn("count", sequelize.col("ref_product_name")), "times"],
];
const attributesChargesByUser = [
  "game_user_id",
  "ref_product_name",
  "cash",
  // [sequelize.fn("sum", sequelize.col("cash")), "total_cash"],
  [sequelize.fn("count", sequelize.col("ref_product_name")), "times"],
];
module.exports = {
  getUsersCharges: async (req, res, next) => {
    Log.findAll({
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
        const arrUserId = await data.map((val) => Number(val.game_user_id));
        UserProfiles.findAll({
          attributes: ["nickname", "userid"],
          where: {
            userid: arrUserId,
          },
          raw: true,
        })
          .then(async (data1) => {
            const users = [];
            data.map((val2) => {
              data1.map((val3) => {
                if (val3.userid === Number(val2.game_user_id)) {
                  const demo = {
                    nickname: val3.nickname,
                    game_user_id: val2.game_user_id,
                    total_cash: val2.total_cash,
                    count: val2.times,
                  };
                  users.push(demo);
                }
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
  getChargesByUser: (req, res, next) => {
    const { gameUserId } = req.query;
    Log.findAll({
      attributes: attributesChargesByUser,
      group: ["ref_product_name"],
      order: sequelize.literal("times DESC"),
      where: {
        partner_id: "A5173E6F-A2FF-4424-88E9-DA532346D738",
        game_user_id: gameUserId,
      },
      raw: true,
      // limit: pageSize,
      // offset: pageSize * (page - 1),
      // limit: 20,
      offset: 0,
    })
      .then((data) => {
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
