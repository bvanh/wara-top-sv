const Squelize = require("sequelize");
const squelize = require("../services/databases");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const UserProfiles = sequelize.master.define(
    "User",
    {
      userid: DataTypes.INTEGER,
    },
    {
      tableName: "t_profiles",
    }
  );
  UserProfiles.associate = function(models) {
    UserProfiles.belongsTo(models.company, {
      foreignKey: "game_user_id",
      as: "company",
    });
  };
  return UserProfiles;
};
