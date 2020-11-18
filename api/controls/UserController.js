"use strict";
const { User } = require("../models/Users");
const { UserInfo } = require("../models/Log");
const attributesUser = ["userid", "level"];
const { Op } = require("sequelize");
module.exports = {
  getUsers: async (req, res, next) => {
    User.findAll({
      attributes: attributesUser,
      order: [["level", "DESC"]],
      where: {
        userid: {
          [Op.lt]: 9000000000000000001,
        },
      },
      raw: true,
      limit: 20,
      offset: 0,
    })
      .then((data) => {
        const arrUserId = data.map((val) => val.userid);
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
            data.map((val2) => {
              data1.map((val3) => {
                if (val2.userid === val3.userid) {
                  const demo = {
                    nickname: val3.nickname,
                    game_user_id: val2.userid,
                    level: val2.level,
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
};
