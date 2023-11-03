"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client }) {
      // define association here
      this.hasMany(Client, {
        foreignKey: "userId",
        as: "user",
      });
    }
    validPassword(password) {
      console.log("password ", password);
      console.log("this.password ", this.password);
      return bcrypt.compareSync(password, this.password);
    }
  }
  User.init(
    {
      // uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: { args: true, msg: "Username already exists!"},
        validate: {
          notNull: { msg: "User must have a username." },
          notEmpty: { msg: "Username must not be empty." },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
        // // unique: { args: true, msg: "Username already exists!"},
        // validate: {
        //   notNull: { msg: "User must have a first name." },
        //   notEmpty: { msg: "First name must not be empty." },
        // },
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
        // // unique: { args: true, msg: "Username already exists!"},
        // validate: {
        //   notNull: { msg: "User must have a last name." },
        //   notEmpty: { msg: "Last name must not be empty." },
        // },
      },
      email: {
        type: DataTypes.STRING,
        // allowNull: false,
        // // unique: { args: true, msg: "Username already exists!"},
        // validate: {
        //   notNull: { msg: "User must have an email." },
        //   notEmpty: { msg: "Email must not be empty." },
        // },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a password." },
          notEmpty: { msg: "Password must not be empty." },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    }
  );
  return User;
};
