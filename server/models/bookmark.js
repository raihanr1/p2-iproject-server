"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookMark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookMark.belongsTo(models.Property, { foreignKey: "PropertyId" });
    }
  }
  BookMark.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User id is required",
          },
          notNull: {
            msg: "User id is required",
          },
        },
      },
      PropertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Property id is required",
          },
          notNull: {
            msg: "Property id is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "BookMark",
    }
  );
  return BookMark;
};
