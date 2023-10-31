"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client }) {
      // define association here
      this.belongsTo(Client, {
        foreignKey: "clientId",
        as: "client",
      });
    }
  }
  Policy.init(
    {
      category: DataTypes.STRING,
      policyName: DataTypes.STRING,
      policyNo: DataTypes.STRING,
      nextPayment: DataTypes.DATE,
      commencement: DataTypes.DATE,
      expiry: DataTypes.DATE,
      premium: DataTypes.INTEGER,
      lifeAssured: DataTypes.STRING,
      coverage: DataTypes.STRING,
      paymentPeriod: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Policy",
    }
  );
  return Policy;
};
