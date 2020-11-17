module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      game_user_id: DataTypes.STRING,
    },
    { tableName: "log_partner_charges" }
  );
  Company.associate = function(models) {
    Company.hasMany(models.User, { as: "employes" });
  };
  return Company;
};
