"use strict";
const Users = require("../models/Users");
const attributesUser = ["userid", "level"];
const typeSearch = {
  1: "username",
};
const getPagingData = (data, page, limit) => {
  //console.log(data)
  const { count: totalItems, rows: listUsers } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, listUsers };
};
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
module.exports = {
  getUsers: async (req, res, next) => {
    //console.log(req)
    // const { page, size } = req.query;
    // const { limit, offset } = getPagination(page, size);
    Users.findAndCountAll({
      attributes: attributesUser,
      order:[['level', 'DESC'],],
      //   where: {
      //     search: sequelize.where(
      //       sequelize.fn("LOWER", sequelize.col(typeSearch[type])),
      //       "LIKE",
      //       "%" + search + "%"
      //     ),
      //   },
      limit: 20,
      offset: 15,
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
