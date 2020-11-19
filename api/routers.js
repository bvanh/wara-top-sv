"use strict";
let apiUser = require("./controls/UserController");
let apiLogCharges = require("./controls/LogController");
// let apiNews = require("./controls/NewsController");
// let multer = require("./models/upload");
// let media = require("./controls/MediaController");
module.exports = function (app) {
  // app.route("/login").post(logApi.login);
  app.route("/toplevel").get(apiUser.getUsers);
  app.route("/getuserinfo").get(apiUser.getUserInfo);
  app.route("/topcharges").get(apiLogCharges.getUsersCharges);
  app.route("/chargesbyuser").get(apiLogCharges.getChargesByUser);
};
