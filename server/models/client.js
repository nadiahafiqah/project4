"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Policy, User }) {
      // define association here
      this.hasMany(Policy, {
        foreignKey: "clientId",
        as: "policies",
      });
      // this.belongsTo(User, {
      //   foreignKey: "userId",
      //   as: "client",
      // });
    }
  }
  Client.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a first name." },
          notEmpty: { msg: "First name must not be empty." },
        },
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a last name." },
          notEmpty: { msg: "Last name must not be empty." },
        },
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a date of birth." },
          notEmpty: { msg: "Date of birth must not be empty." },
        },
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a sex." },
          notEmpty: { msg: "Sex of client must not be empty." },
        },
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a contact number." },
          notEmpty: { msg: "Contact number must not be empty." },
        },
      },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
