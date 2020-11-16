"use strict";
const { User } = require("../models/Users");
const attributesUser = ["userid", "level"];
const { Op } = require("sequelize");
module.exports = {
  getUsers: async (req, res, next) => {
    User.findAndCountAll({
      attributes: attributesUser,
      order: [["level", "DESC"]],
      where: {
        userid: {
          [Op.lt]: 9000000000000000001,
        },
      },
      limit: 20,
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
